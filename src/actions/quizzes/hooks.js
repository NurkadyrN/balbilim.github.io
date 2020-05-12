import submitValidation from "../../utils/validations/submit-validation";
import urlAddSubUrl from "../../hooks/url-add-sub-url";

const quizzesSubmitValidate = (result, alertSet, history) => {
    if (result.status === 'create') {
        const {location: {pathname}} = history;
        console.log(result.res.data.id)
        const redirect = urlAddSubUrl(pathname, result.res.data.id)
        return submitValidation(result, alertSet, history, redirect)
    }
    return submitValidation(result, alertSet, history)
}

export {quizzesSubmitValidate}
