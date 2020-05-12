import {getCookie} from "../hooks";
import transformValues from "../utils/validations/transform-values";
import {API_URL} from "../settings/setting";

export default class SwapiService {
    _apiBase = API_URL;
    _imageBase = 'https://starwars-visualguide.com/assets/img';


    getResource = async (url) => {
        return await this.request(url)
    };
    setResource = async (url, body = {}) => {
        return await this.request(url, 'POST', body)
    };
    updateResource = async (url, body = {}) => {
        return await this.request(url, 'PUT', body)
    };
    partUpdateResource = async (url, body = {}) => {
        return await this.request(url, 'PATCH', body)
    };
    deleteResource = async (url) => {
        return await this.request(url, 'DELETE')
    };
    getOptions = async (url) => {
        const res = await this.request(url, 'OPTIONS');
        if (res.status === 200) {
            res.data = res.data["actions"]
        }
        return res;
    };

    setUser = async (body) => {
        return await this.setResource(`/auth/users/`, body);
    };
    getUser = async (body) => {
        const res = await this.getResource(`/auth/users/me/`, body);
        if (res.status === 200) {
            res.data = this._transformUser(res.data)
        }
        return res
    };

    loginUser = async (body) => {
        return await this.setResource(`/auth/token/login/`, body);
    };
    logoutUser = async () => {
        return await this.setResource(`/auth/token/logout/`,);
    };

    getAllClassroom = async () => {
        const res = await this.getResource(`/classroom/`);
        if (res.status === 200) {
            res.data.results = res.data.results.map(this._transformClassroomSet)
        }
        return res
    };
    setClassroom = async (body) => {
        return await this.setResource(`/classroom/`, body);
    };


    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
            .slice(0, 5);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results
            .map(this._transformStarship)
            .slice(0, 5);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformUser = (user) => {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            fullName: user.get_full_name,
            avatar: user.get_avatar,
            isStaff: user.is_staff,
            lastLogin: user.last_login,
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
    _transformClassroomSet = (classroom) => {
        return {
            id: classroom.id,
            title: classroom.title,
        }
    };
    request = async (url, method = "GET", body) => {
        const token = getCookie('token');
        let headers = {};
        if (token) {
            headers = {'Authorization': `Token ${token}`}
        }
        const partBody = {};
        if (body) {
            partBody.body = transformValues(body)
        }
        return await fetch(`${this._apiBase}${url}`,
            {
                method: method,
                credentials: 'include',
                headers: {
                    ...headers
                },
                ...partBody
            }
        ).then((res) => {
            const status = res.status;
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return res.json().then((data) => {
                    return {status, data}
                })
            } else {
                return {status, data: null}
            }

        }).catch((err) => ({status: 'notConnected', data: {detail: err.message}}));

    };
}
