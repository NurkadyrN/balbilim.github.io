import submitValidate from "../submit-validate";

const signUpSubmit = (setUser) => (values) => {
    return setUser(values).then((err) =>submitValidate(err))
};

export default signUpSubmit;
