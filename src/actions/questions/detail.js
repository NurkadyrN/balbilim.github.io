import {bindActionCreators} from "redux";
import {alertSet} from "../alert";
import {deleteObject, setObject, updateObject} from "../default";
import {quizzesAddQuestions, quizzesDeleteQuestions} from "../quizzes/detail";
import {submitValidate} from "./hooks";
import {reset} from "redux-form";
import {answersListLoaded} from "./answers";

const questionsDetailRequested = () => {
    return {
        type: 'FETCH_QUESTIONS_DETAIL_REQUEST'
    };
};

const questionsDetailLoaded = (object) => {
    return {
        type: 'FETCH_QUESTIONS_DETAIL_SUCCESS',
        payload: object
    };
};
const addModelNameOfQuestions = (modelName) => {
    return {
        type: 'ADD_MODEL_NAME_OF_QUESTIONS',
        payload: modelName
    };
};

const questionsDetailError = (error) => {
    return {
        type: 'FETCH_QUESTIONS_DETAIL_FAILURE',
        payload: error
    };
};

const questionsSubmitValidate = (result, alertSet, dispatch) => {
    if (result.success) {
        dispatch(reset('QuestionsForm'))
        dispatch(answersListLoaded([]))
        dispatch(quizzesAddQuestions(result.res.data))
        dispatch(questionsDetailLoaded({}))
    }
    return submitValidate(result, alertSet)
}

const deleteQuestions = (SwapiService) => (id) => async (dispatch) => {
    const res = await deleteObject(SwapiService)('Questions', id)(dispatch)
    if (res.deleted) {
        dispatch(quizzesDeleteQuestions(id))
        dispatch(alertSet({type: 'success', message: 'Удалено'}))
    } else {
        dispatch(alertSet({type: 'error', message: res.res.status + ' Ошибка'}))
    }
};


const questionsEditSubmit = (SwapiService) => (moduleName, id, value) => (dispatch) => {
    const func = bindActionCreators({
        alertSet: alertSet,
        updateQuestions: updateObject(SwapiService),
        setQuestions: setObject(SwapiService),
    }, dispatch);
    if (id) {
        return func.updateQuestions(moduleName, id, value).then((res) => questionsSubmitValidate(res, func.alertSet, dispatch))
    } else {
        return func.setQuestions(moduleName, value).then((res) => questionsSubmitValidate(res, func.alertSet, dispatch))
    }
}


export {
    addModelNameOfQuestions,
    questionsEditSubmit,
    questionsDetailRequested,
    questionsDetailLoaded,
    deleteQuestions,
    questionsDetailError
}
