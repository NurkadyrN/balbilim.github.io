const signInValidate = (values) => {
    const errors = {};
    const {
        username,
        password,
    } = values;

    if (!username) {
        errors.username = 'Required'
    }
    if (!password) {
        errors.password = 'Required'
    }
    return errors
};

export default signInValidate;