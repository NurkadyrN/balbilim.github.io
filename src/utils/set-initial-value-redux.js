const setInitialValueRedux = (value, change,notAdd=[]) => {
    Object.keys(value).map((key) => {
        if (value[key] && !notAdd.includes(key)) {
            change(key, value[key])
        }
    })
};

export default setInitialValueRedux;
