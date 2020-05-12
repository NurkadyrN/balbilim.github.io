const defaultDetail = (state, action) => {
    if (state === undefined) {
        return {
            object: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_DETAIL_REQUEST':
            return {
                object: {},
                loading: true,
                error: null
            };

        case 'FETCH_DETAIL_SUCCESS':
            return {
                object: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_DETAIL_FAILURE':
            return {
                object: {},
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default defaultDetail;
