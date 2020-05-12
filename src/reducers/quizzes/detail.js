const quizzesDetail = (state, action) => {
    if (state === undefined) {
        return {
            object: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_QUIZZES_DETAIL_REQUEST':
            return {
                object: {},
                loading: true,
                error: null
            };
        case 'FETCH_QUIZZES_ADD_QUESTIONS':
            return {
                object: addQuestions(state.object,action.payload),
                loading: false,
                error: null
            };
        case 'FETCH_QUIZZES_DELETE_QUESTIONS':
            return {
                object: deleteQuestions(state.object,action.payload),
                loading: false,
                error: null
            };

        case 'FETCH_QUIZZES_DETAIL_SUCCESS':
            return {
                object: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_QUIZZES_DETAIL_FAILURE':
            return {
                object: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
const addQuestions = (object,question) => {
    const {questions} = object;
    let newQuestions = []
    if (questions) {
        const index = questions.findIndex(({id}) => id === question.id)
        if (index === -1) {
            newQuestions = [...questions,question]
        } else {
            newQuestions = [...questions.slice(0,index),question,...questions.slice(index+1)]
        }
    }
    return {...object,questions:newQuestions}
}
const deleteQuestions = (object,questionId) => {
    const {questions} = object;
    let newQuestions = [...questions]
    if (questions) {
        const index = questions.findIndex(({id}) => id === questionId)
        if (index !== -1) {
            newQuestions = [...questions.slice(0,index),...questions.slice(index+1)]
        }
    }
    return {...object,questions:newQuestions}
}

export default quizzesDetail;
