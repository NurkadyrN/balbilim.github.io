import {MODEL_PARAMS} from "../../settings/setting";
import defaultErrorMessages from "../../utils/default-error-messages";
import {bindActionCreators} from "redux";
import {alertSet} from "../alert";
import submitValidation from "../../utils/validations/submit-validation";
import MODEL_ACTIONS_DETAIL from "../../settings/models-actions-detail";
import MODEL_ACTIONS_LIST from "../../settings/models-actions-list";
import {deleteObjectFromList} from "./list";

const defaultDetailRequested = () => {
    return {
        type: 'FETCH_DETAIL_REQUEST'
    };
};

const defaultDetailLoaded = (object) => {
    return {
        type: 'FETCH_DETAIL_SUCCESS',
        payload: object
    };
};

const defaultDetailError = (error) => {
    return {
        type: 'FETCH_DETAIL_FAILURE',
        payload: error
    };
};

const setObject = (SwapiService) => (modelName, body, match) => async (dispatch) => {

    const {
        errorResponse = defaultDetailError,
        requestServer = defaultDetailRequested,
        afterCreate
    } = MODEL_ACTIONS_DETAIL[modelName] || {};
    dispatch(requestServer());
    const modelParams = MODEL_PARAMS[modelName];
    if (!modelParams) {
        dispatch(errorResponse(defaultErrorMessages(404)));
        return {error: {type: 'error', message: defaultErrorMessages(404).message}};
    }

    const url = modelParams.url({match});
    const res = await SwapiService.setResource(url, body);
    const data = res.data;
    let result = {};
    switch (res.status) {
        case 201:
            if (afterCreate) {
                dispatch(afterCreate(data));
            }
            result = {
                success: {type: 'success', message: 'Создано'},
                params: {modelName, objectId: data.id},
                status: 'create'
            };
            break
        case 400:
            result = {validate: {data}};
            break
        default:
            dispatch(errorResponse(defaultErrorMessages(404)));
            result = {error: {type: 'error', message: res.status + ' Ошибка'}};
    }
    return {...result, res}
};

const updateObject = (SwapiService) => (modelName, id, body) => async (dispatch) => {
    const modelParams = MODEL_PARAMS[modelName];
    const {
        errorResponse = defaultDetailError,
        loadData = defaultDetailLoaded
    } = MODEL_ACTIONS_DETAIL[modelName] || {};
    if (!modelParams) {
        dispatch(errorResponse(defaultErrorMessages(404)));
        return {}
    }
    const url = modelParams.url({subUrl: id + '/'});
    const res = await SwapiService.updateResource(url, body);
    const data = res.data;
    let result = {};
    switch (res.status) {
        case 200:
            dispatch(loadData(data));
            result = {
                success: {type: 'success', message: 'Обновлено'},
                params: {modelName, objectId: data.id},
                status: 'update'
            };
            break
        case 400:
            result = {validate: {data}};
            break
        default:
            dispatch(errorResponse(defaultErrorMessages(res.status)));
            result = {error: {type: 'error', message: res.status + ' Ошибка'}};
    }
    return {...result, res}
};

const getObject = (SwapiService) => (modelName, id) => async (dispatch) => {
    const {
        errorResponse = defaultDetailError,
        loadData = defaultDetailLoaded,
        requestServer = defaultDetailRequested
    } = MODEL_ACTIONS_DETAIL[modelName] || {};
    const modelParams = MODEL_PARAMS[modelName];
    if (!modelParams) {
        dispatch(errorResponse(defaultErrorMessages(404)));
        return {}
    }
    dispatch(requestServer());
    const url = modelParams.url({subUrl: id + '/edit_data/'});
    const res = await SwapiService.getResource(url);
    const {data, status} = res;
    switch (status) {
        case 200:
            dispatch(loadData(data));
            break;
        default:
            dispatch(errorResponse(defaultErrorMessages(404)));
    }
    return res
};

const deleteObject = (SwapiService) => (modelMane, id) => async (dispatch) => {
    const modelParams = MODEL_PARAMS[modelMane];
    if (!modelParams) {
        dispatch(alertSet({type: 'error', message: '404 Ошибка'}))
        return null
    }
    const url = modelParams.url({subUrl: id + '/'});
    const res = await SwapiService.deleteResource(url);
    switch (res.status) {
        case 204:
            return {modelMane, id, deleted: true}
        default:
            return {res, deleted: false}
    }
};

const defaultEditSubmit = (SwapiService) => (modelName, id, value, history, match) => (dispatch) => {
    const {
        submitValidateModel = submitValidation,
    } = MODEL_ACTIONS_DETAIL[modelName] || {};
    const func = bindActionCreators({
        alertSet: alertSet,
        updateObject: updateObject(SwapiService),
        setObject: setObject(SwapiService),
    }, dispatch);
    if (id) {
        return func.updateObject(modelName, id, value).then((res) => submitValidateModel(res, func.alertSet, history))
    } else {
        return func.setObject(modelName, value, match).then((res) => submitValidateModel(res, func.alertSet, history))
    }
}

const afterDeleteRedirectDefault = (push, redirect) => {
    if (redirect) {
        push(redirect)
        return
    }
    push('/')
}

const deleteObjectDetail = (SwapiService) => (modelName, id, push, redirect) => async (dispatch) => {
    const res = await deleteObject(SwapiService)(modelName, id)(dispatch)
    const {
        deleteListObject = deleteObjectFromList
    } = MODEL_ACTIONS_LIST[modelName] || {};
    if (res.deleted) {
        dispatch(deleteListObject(id))
        afterDeleteRedirectDefault(push, redirect)
        dispatch(alertSet({type: 'success', message: 'Удалено'}))
    } else {
        dispatch(alertSet({type: 'error', message: res.res.status + ' Ошибка'}))
    }
};


export {setObject, deleteObjectDetail, getObject, deleteObject, updateObject, defaultEditSubmit, defaultDetailLoaded}
