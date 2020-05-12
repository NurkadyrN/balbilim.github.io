const getSearchParams = (search, paramsKey = []) => {
    const objects = {};
    const params = new URLSearchParams(search);
    if (paramsKey.length === 1) {
        return params.get(paramsKey[0])
    }
    params.forEach(function (value, key) {
        if (paramsKey.length > 0) {
            if (paramsKey.indexOf(key) > -1) {
                objects[key] = value;
            }
        } else {
            objects[key] = value;
        }
    });
    return objects;
};

export default getSearchParams;
