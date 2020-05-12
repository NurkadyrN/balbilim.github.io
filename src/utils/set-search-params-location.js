import setSearchParams from "./set-search-params";

const setSearchParamsLocation = (location,params) => {
    return {...location,search:setSearchParams(location.search,params)}
};

export default setSearchParamsLocation;
