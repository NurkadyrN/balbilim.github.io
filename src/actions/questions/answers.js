import {bindActionCreators} from "redux";
import {alertSet} from "../alert";
import {deleteObject, setObject, updateObject} from "../default";
import {submitValidate} from "./hooks";
import {reset} from 'redux-form';


const answersDetailRequested = () => {
    return {
        type: 'FETCH_ANSWERS_LIST_QUESTION_REQUEST'
    };
};

const answersDetailLoaded = (object) => {

    return {
        type: 'ADD_UPDATE_ANSWERS_QUESTION_SUCCESS',
        payload: object
    };
};
const answersDetailSelect = (object) => {

    return {
        type: 'SELECT_ANSWERS_QUESTION_SUCCESS',
        payload: object
    };
};

const answersListLoaded = (object) => {
    return {
        type: 'FETCH_ANSWERS_LIST_QUESTION_SUCCESS',
        payload: object
    };
};
const answersDelete = (object) => {
    return {
        type: 'DELETE_ANSWERS_QUESTION_SUCCESS',
        payload: object
    };
};

const answersDetailError = (error) => {
    return {
        type: 'FETCH_ANSWERS_LIST_QUESTIONS_FAILURE',
        payload: error
    };
};


const deleteAnswers = (SwapiService) => (id) => async (dispatch) => {
    const res = await deleteObject(SwapiService)('AnswerSimpleTest', id)(dispatch)
    if (res.deleted) {
        dispatch(answersDelete(id))
        dispatch(alertSet({type: 'success', message: 'Удалено'}))
    } else {
        dispatch(alertSet({type: 'error', message: res.res.status + ' Ошибка'}))
    }
};

const answerSubmitValidate = (result, alertSet, dispatch) => {
    if (result.success) {
        dispatch(reset(result.params.modelName))
    }
    return submitValidate(result, alertSet)
}


const answersEditSubmit = (SwapiService) => (moduleName, id, value) => (dispatch) => {
    const func = bindActionCreators({
        alertSet: alertSet,
        updateQuestions: updateObject(SwapiService),
        setQuestions: setObject(SwapiService),
    }, dispatch);
    if (id) {
        return func.updateQuestions(moduleName, id, value).then((res) =>
            answerSubmitValidate(res, func.alertSet, dispatch))
    } else {
        return func.setQuestions(moduleName, value).then((res) =>
            answerSubmitValidate(res, func.alertSet, dispatch))
    }
}


export {
    answersEditSubmit,
    deleteAnswers,
    answersDetailSelect,
    answersListLoaded,
    answersDetailRequested,
    answersDetailLoaded,
    answersDetailError
}
