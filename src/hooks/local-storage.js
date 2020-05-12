const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

const getLocalStorage = (key,ifNull=null) => {
    return localStorage.getItem(key)||ifNull;
};
const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};
const clearLocalStorage = () => {
    localStorage.clear();
};
export {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    clearLocalStorage
}
