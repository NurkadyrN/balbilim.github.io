const quizzesListRequested = () => {
    return {
        type: 'FETCH_QUIZZES_LIST_REQUEST'
    };
};

const quizzesListLoaded = (quizzes) => {
    return {
        type: 'FETCH_QUIZZES_LIST_SUCCESS',
        payload: quizzes
    };
};


const quizzesListError = (error) => {
    return {
        type: 'FETCH_QUIZZES_LIST_FAILURE',
        payload: error
    };
};

const quizzesDeleteObject = (id) => {
    return {
        type: 'SUBJECTS_QUIZZES_OBJECT',
        payload: id
    };
};



export {
    quizzesListRequested,
    quizzesListLoaded,
    quizzesListError,
    quizzesDeleteObject
}
