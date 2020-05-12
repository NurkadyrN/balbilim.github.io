import {clearLocalStorage, getCookie, removeCookie, setCookie} from "../../hooks";
import {UpdateState} from "../default/default";

const UserRequested = () => {
    return {
        type: 'FETCH_USER_REQUEST'
    };
};

const UserLogout = () => {
    return {
        type: 'FETCH_USER_LOGOUT'
    };
};

const UserLoaded = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: user
    };
};

const UserError = (error) => {
    return {
        type: 'FETCH_USER_FAILURE',
        payload: error
    };
};

const NotAuth = (dispatch) => {
    dispatch(UpdateState());
    dispatch(UserLogout());
    removeCookie('token');
    clearLocalStorage()
};

const getUser = (SwapiService) => () => async (dispatch) => {
    dispatch(UserRequested());
    const res = await SwapiService.getUser();
    const data = res.data;
    switch (res.status) {
        case 200:
            dispatch(UserLoaded(data));
            break;
        case 401:
            NotAuth(dispatch);
            break;
        default:
            dispatch(UserError(data));
    }
};
const setUser = (SwapiService) => (body, headers) => async (dispatch) => {
    dispatch(UserRequested());
    NotAuth(dispatch);
    const res = await SwapiService.setUser(body, headers);
    const data = res.data;
    switch (res.status) {
        case 201:
            loginUser(SwapiService)({username: body.username, password: body.password})(dispatch);
            break;
        case 400:
            return data;
        default:
            dispatch(UserError(data));
    }
};
const loginUser = (SwapiService) => (body, headers) => async (dispatch) => {
    dispatch(UserRequested());
    NotAuth(dispatch);
    const res = await SwapiService.loginUser(body, headers);
    const data = res.data;
    switch (res.status) {
        case 200:
            setCookie('token', data['auth_token']);
            getUser(SwapiService)()(dispatch);
            break;
        case 400:
            return data;
        default:
            dispatch(UserError(data));
    }
};

const logoutUser = (SwapiService) => () => async (dispatch) => {
    dispatch(UserRequested());
    const res = await SwapiService.logoutUser();
    const data = res.data;
    switch (res.status) {
        case 204:
            NotAuth(dispatch);
            break;
        case 401:
            NotAuth(dispatch);
            break;
        default:
            dispatch(UserError(data));
    }
};


export {
    setUser,
    loginUser,
    getUser,
    logoutUser
};
