const questionsDetail = (state, action) => {
    if (state === undefined) {
        return {
            object: {},
            loading: true,
            error: null,
            modelName: 'SimpleTest'
        };
    }

    switch (action.type) {
        case 'FETCH_QUESTIONS_DETAIL_REQUEST':
            return {
                object: {},
                loading: true,
                error: null,
                modelName: state.modelName
            };

        case 'FETCH_QUESTIONS_DETAIL_SUCCESS': {
            const content = action.payload.content
            return {
                object: action.payload,
                loading: false,
                error: null,
                modelName: content ? content['model_name'] : state.modelName
            };
        }
        case 'ADD_MODEL_NAME_OF_QUESTIONS':
            return {
                object: {},
                loading: false,
                error: null,
                modelName: action.payload
            };

        case 'FETCH_QUESTIONS_DETAIL_FAILURE':
            return {
                object: {},
                loading: false,
                error: action.payload,
                modelName: state.modelName
            };

        default:
            return state;
    }
};

export default questionsDetail;
