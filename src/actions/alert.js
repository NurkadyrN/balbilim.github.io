const alertRemove = () => {
    return {
        type: 'ALERT_REMOVE'
    };
};

const alertSet = (...alerts) => {
    return {
        type: 'ALERT_SET',
        payload: alerts
    };
};


export {alertRemove, alertSet}