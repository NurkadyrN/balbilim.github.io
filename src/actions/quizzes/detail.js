const quizzesAddQuestions = (object) => {
    return {
        type: 'FETCH_QUIZZES_ADD_QUESTIONS',
        payload: object
    };
};

const quizzesDeleteQuestions = (objectId) => {
    return {
        type: 'FETCH_QUIZZES_DELETE_QUESTIONS',
        payload: objectId
    };
};

const quizzesDetailRequested = () => {
    return {
        type: 'FETCH_QUIZZES_DETAIL_REQUEST'
    };
};

const quizzesDetailLoaded = (object) => {
    return {
        type: 'FETCH_QUIZZES_DETAIL_SUCCESS',
        payload: object
    };
};

const quizzesDetailError = (error) => {
    return {
        type: 'FETCH_QUIZZES_DETAIL_FAILURE',
        payload: error
    };
};


export {
    quizzesDetailRequested,
    quizzesAddQuestions,
    quizzesDetailLoaded,
    quizzesDetailError,
    quizzesDeleteQuestions
}
