import {SubmissionError} from "redux-form";

const classroomSubmitValidate = (result, alertSet, history) => {
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
        const {push, location: {state: {afterSubmit}}} = history;
        if (afterSubmit) {
            push(afterSubmit)
        } else {
            push('/classroom')
        }
    }
    if (error) {
        alertSet(error);
    }
}

export {classroomSubmitValidate}
