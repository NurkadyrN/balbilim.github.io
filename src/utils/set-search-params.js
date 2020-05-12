const setSearchParams = (search='', params={},start='') => {
    const returnParams = new URLSearchParams(search);
    Object.keys(params).map((key) => {
        returnParams.set(key, params[key]);
    });
    const string = returnParams.toString()
    return string?start+string:''
};
export default setSearchParams;
