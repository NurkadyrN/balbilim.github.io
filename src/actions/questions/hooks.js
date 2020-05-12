import {SubmissionError} from "redux-form";

const submitValidate = (result, alertSet) => {
    const {error, success, validate} = result
    if (validate) {
        const {data} = validate
        Object.keys(data).map((key) => {
                const error_field = {};
                error_field[key] = data[key][0];
                throw new SubmissionError(error_field)
            }
        );
    }
    if (success) {
        alertSet(success);
    }
    if (error) {
        alertSet(error);
    }
}

export {submitValidate};
