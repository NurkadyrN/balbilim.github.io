import {MODEL_PARAMS} from "../../settings/setting";


const unitsRequested = () => {
    return {
        type: 'FETCH_UNITS_REQUEST'
    };
};

const unitsLoaded = (classrooms) => {
    return {
        type: 'FETCH_UNITS_SUCCESS',
        payload: classrooms
    };
};

const unitsError = (error) => {
    return {
        type: 'FETCH_UNITS_FAILURE',
        payload: error
    };
};

const getUnits = (SwapiService) => ({params: {id}}) => async (dispatch) => {
    const url = MODEL_PARAMS['Units'].url() + id
    const res = await SwapiService.getResource(url);
    const data = res.data;
    dispatch(unitsRequested());
    switch (res.status) {
        case 200:
            dispatch(unitsLoaded(data));
            break;
        default:
            dispatch(unitsError(data));
    }
}

export {getUnits, unitsLoaded, unitsRequested, unitsError}
