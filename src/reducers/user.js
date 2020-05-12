const userRedux = (state, action) => {
    if (state === undefined) {
        return {
            user: [],
            authenticated:false,
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                user: [],
                authenticated:false,
                loading: true,
                error: null
            };

        case 'FETCH_USER_SUCCESS':
            return {
                user: action.payload,
                authenticated:true,
                loading: false,
                error: null
            };

        case 'FETCH_USER_FAILURE':
            return {
                user: [],
                authenticated:false,
                loading: false,
                error: action.payload,
            };
        case 'FETCH_USER_LOGOUT':
            return {
                user: [],
                authenticated:false,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default userRedux;
