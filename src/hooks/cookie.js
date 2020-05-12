import Cookies from 'universal-cookie';
import {COOKIE_LIVE_TIME} from "../settings/setting";

const cookies = new Cookies();

const setCookie = (key, value) => {
    let d = new Date();
    d.setTime(d.getTime() + (1000 * 60 * 60 * COOKIE_LIVE_TIME));
    cookies.set(key, value, {path: '/', expires: d});
};

const removeCookie = (key) => {
    cookies.set(key, '', {path: '/', expires: 0});
};

const getCookie = (key) => {
    return cookies.get(key)
};

export {
    setCookie,
    getCookie,
    removeCookie
}
