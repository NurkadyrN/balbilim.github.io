const classroomOptionsRequested = () => {
    return {
        type: 'FETCH_CLASSROOM_OPTIONS_REQUEST'
    };
};

const classroomOptionsLoaded = (options) => {
    return {
        type: 'FETCH_CLASSROOM_OPTIONS_SUCCESS',
        payload: options
    };
};

const classroomOptionsError = (error) => {
    return {
        type: 'FETCH_CLASSROOM_OPTIONS_FAILURE',
        payload: error
    };
};

const getClassroomOptions = (SwapiService) => () => (dispatch) => {
    dispatch(classroomOptionsRequested());
    SwapiService.getOptions('/classroom/')
        .then((data) => {
            dispatch(classroomOptionsLoaded(data.data))
        })
        .catch((err) => dispatch(classroomOptionsError(err)));
};

export {getClassroomOptions}