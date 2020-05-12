import {SubmissionError} from "redux-form";

const signInSubmit = (loginUser) => (values) => {

    return loginUser(values).then((err) => {
        if (!err) {
            return;
        }
        throw new SubmissionError({
            username: 'Невозможно войти с предоставленными учетными данными.',
            _error: 'Login failed!'
        })

    })
};

export default signInSubmit;