import {SubmissionError} from "redux-form";

const submitValidation = (result = {}, alertSet, history, redirect) => {
    const {location: {pathname, state: {prevEditPath = {}, afterSubmit} = {}} = {}, push} = history;
    const {error, success, validate} = result
    if (validate) {
        const {data} = validate
        Object.keys(data).map((key) => {
                const error_field = {};
                error_field[key] = data[key][0];
                throw new SubmissionError(error_field)
            }
        );
        return;
    }
    if (success) {
        alertSet(success);

        if (redirect) {
            prevEditPath[redirect] = prevEditPath[pathname]
            delete prevEditPath[pathname];
            push({pathname: redirect, state: {prevEditPath, afterSubmit}});
            return;
        }

        if (prevEditPath) {
            const toPath = prevEditPath[pathname];
            delete prevEditPath[pathname];
            if (toPath) {
                const {prevPath, value, fieldName} = toPath;
                const fieldValue = value[fieldName] || []
                value[fieldName] = [
                    ...fieldValue,
                    {value: result.res.data.id, display_name: result.res.data['__str__'],}
                ]
                push({pathname: prevPath, state: {value: {...value}, prevEditPath}});
                return;
            }
        }
        if (afterSubmit) {
            push(afterSubmit);
            return;
        }
        push('/');
        return;
    }
    if (error) {
        alertSet(error);
    }

};

export default submitValidation;
