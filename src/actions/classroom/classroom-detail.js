import {MODEL_PARAMS} from "../../settings/setting";
import {getLocalStorage, removeLocalStorage} from "../../hooks";
import defaultErrorMessages from "../../utils/default-error-messages";

const classroomRequested = () => {
    return {
        type: 'FETCH_CLASSROOM_REQUEST'
    };
};

const classroomLoaded = (classrooms) => {
    return {
        type: 'FETCH_CLASSROOM_SUCCESS',
        payload: classrooms
    };
};

const classroomError = (error) => {
    return {
        type: 'FETCH_CLASSROOM_FAILURE',
        payload: error
    };
};

const getClassroom = (SwapiService) => () => async (dispatch) => {
    const id = getLocalStorage('classroomId')
    if (id) {
        const url = MODEL_PARAMS['ClassRoom'].url() + id
        const res = await SwapiService.getResource(url);
        const data = res.data;
        dispatch(classroomRequested());
        switch (res.status) {
            case 200:
                dispatch(classroomLoaded(data));
                break;
            case 404:
                removeLocalStorage('classroomId')
                dispatch(classroomError(data));
                break
            default:
                dispatch(classroomError(data));
        }
    } else {
        dispatch(classroomError(defaultErrorMessages(404)));
    }
}




export {getClassroom, classroomRequested, classroomLoaded, classroomError}
