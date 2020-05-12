const unitsListRequested = () => {
    return {
        type: 'FETCH_UNITS_LIST_REQUEST'
    };
};

const unitsListLoaded = (units) => {
    return {
        type: 'FETCH_UNITS_LIST_SUCCESS',
        payload: units
    };
};


const unitsListError = (error) => {
    return {
        type: 'FETCH_UNITS_LIST_FAILURE',
        payload: error
    };
};

const unitsDeleteObject = (id) => {
    return {
        type: 'SUBJECTS_UNITS_OBJECT',
        payload: id
    };
};



export {
    unitsListRequested,
    unitsListLoaded,
    unitsListError,
    unitsDeleteObject
}
