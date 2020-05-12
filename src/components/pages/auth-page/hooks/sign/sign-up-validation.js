const signUpValidate = (values,errors={}) => {
    const {
        username,
        email,
        password,
        password2
    } = values;

    if (!username) {
        errors.username = 'Required'
    } else if (username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address'
    }
    if (!password) {
        errors.password = 'Required'
    } else if (password.length < 8){
        errors.password = 'Must be 8 characters or more'
    }
    if (!password2) {
        errors.password2 = 'Required'
    } else if (password !== password2) {
        errors.password2 = 'Repeat password not same'
    }
    return errors
};

export default signUpValidate;