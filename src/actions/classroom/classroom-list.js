const classroomListRequested = () => {
    return {
        type: 'FETCH_CLASSROOM_LIST_REQUEST'
    };
};

const classroomListLoaded = (classrooms) => {
    return {
        type: 'FETCH_CLASSROOM_LIST_SUCCESS',
        payload: classrooms
    };
};

const classroomDeleteObject = (id) => {
    return {
        type: 'CLASSROOM_DELETE_OBJECT',
        payload: id
    };
};

const classroomListError = (error) => {
    return {
        type: 'FETCH_CLASSROOM_LIST_FAILURE',
        payload: error
    };
};


export {classroomListRequested, classroomListLoaded, classroomListError, classroomDeleteObject}
