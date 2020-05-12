import {SubmissionError} from "redux-form";

const submitValidate = (validate) => {
    if (validate) {
        Object.keys(validate).map((key) => {
                const error_field = {};
                error_field[key] = validate[key][0];
                throw new SubmissionError(error_field)
            }
        );
        return null;
    }
    return null;
};

export default submitValidate;
