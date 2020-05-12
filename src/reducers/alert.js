const alertRedux = (state, action) => {
    if (state === undefined) {
        return {
            alerts: [],
        };
    }

    switch (action.type) {
        case 'ALERT_SET':
            return {
                alerts: action.payload,
            };

        case 'ALERT_REMOVE':
            return {
                alerts: [],
            };
        default:
            return state;
    }
};

export default alertRedux;
