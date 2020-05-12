import {MODEL_PARAMS} from "../../settings/setting";


const subjectsRequested = () => {
    return {
        type: 'FETCH_SUBJECTS_REQUEST'
    };
};

const subjectsLoaded = (classrooms) => {
    return {
        type: 'FETCH_SUBJECTS_SUCCESS',
        payload: classrooms
    };
};

const subjectsError = (error) => {
    return {
        type: 'FETCH_SUBJECTS_FAILURE',
        payload: error
    };
};

const getSubjects = (SwapiService) => ({params: {subjectId}}) => async (dispatch) => {
    const url = MODEL_PARAMS['Subjects'].url({subUrl: subjectId + '/'})
    const res = await SwapiService.getResource(url);
    const data = res.data;
    dispatch(subjectsRequested());
    switch (res.status) {
        case 200:
            dispatch(subjectsLoaded(data));
            break;
        default:
            dispatch(subjectsError(data));
    }
}

export {getSubjects, subjectsLoaded, subjectsRequested, subjectsError}
