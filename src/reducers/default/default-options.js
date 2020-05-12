const defaultOptions = (state, action) => {
    if (state === undefined) {
        return {
            model: null,
            options: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_OPTIONS_REQUEST':
            return {
                model: null,
                options: {},
                loading: true,
                error: null
            };

        case 'FETCH_OPTIONS_SUCCESS':
            return {
                model: state.model,
                options: action.payload,
                loading: false,
                error: null
            };
        case 'SET_MODEL_OPTIONS':
            return {
                model: action.payload,
                options: state.options,
                loading: false,
                error: null
            };

        case 'FETCH_OPTIONS_FAILURE':
            return {
                model: null,
                options: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default defaultOptions;
