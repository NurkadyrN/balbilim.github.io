const subjectsListRequested = () => {
    return {
        type: 'FETCH_SUBJECTS_LIST_REQUEST'
    };
};

const subjectsListLoaded = (subjects) => {
    return {
        type: 'FETCH_SUBJECTS_LIST_SUCCESS',
        payload: subjects
    };
};


const subjectsListError = (error) => {
    return {
        type: 'FETCH_SUBJECTS_LIST_FAILURE',
        payload: error
    };
};

const subjectsDeleteListObject = (id) => {
    return {
        type: 'SUBJECTS_DELETE_LIST_OBJECT',
        payload: parseInt(id)
    };
};

const subjectsAddListObject = (subject) => {
    return {
        type: 'FETCH_SUBJECTS_LIST_ADD_SUBJECT',
        payload: subject
    };
};


export {
    subjectsDeleteListObject,
    subjectsListRequested,
    subjectsListLoaded,
    subjectsListError,
    subjectsAddListObject
}
