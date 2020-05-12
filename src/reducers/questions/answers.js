const answers = (state, action) => {
    if (state === undefined) {
        return {
            listAnswers: [],
            answer: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_ANSWERS_LIST_QUESTION_REQUEST':
            return {
                listAnswers: state.listAnswers,
                answer: {},
                loading: true,
                error: null
            };

        case 'FETCH_ANSWERS_LIST_QUESTION_SUCCESS':
            return {
                listAnswers: action.payload,
                answer: {},
                loading: false,
                error: null
            };
        case 'ADD_UPDATE_ANSWERS_QUESTION_SUCCESS':
            return {
                listAnswers: addAnswerQuestions(state.listAnswers,action.payload),
                answer: {},
                loading: false,
                error: null
            };

        case 'DELETE_ANSWERS_QUESTION_SUCCESS':
            return {
                listAnswers: deleteAnswerQuestions(state.listAnswers,action.payload),
                answer: state.answer.id === action.payload? {}:state.answer,
                loading: false,
                error: null
            };

        case 'SELECT_ANSWERS_QUESTION_SUCCESS':
            return {
                listAnswers: state.listAnswers,
                answer:action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_ANSWERS_LIST_QUESTIONS_FAILURE':
            return {
                listAnswers: state.listAnswers,
                answer: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

const addAnswerQuestions = (listAnswers=[],answer={}) => {
    const index = listAnswers.findIndex(({id})=>id === answer.id)
    if (index === -1) {
        return [...listAnswers,answer]
    } else {
        return [...listAnswers.slice(0,index),answer,...listAnswers.slice(index+1)]
    }
}
const deleteAnswerQuestions = (listAnswers=[],ansId) => {
    const index = listAnswers.findIndex(({id})=>id === ansId)
    if (index === -1) {
        return listAnswers
    } else {
        return [...listAnswers.slice(0,index),...listAnswers.slice(index+1)]
    }
}

export default answers;
