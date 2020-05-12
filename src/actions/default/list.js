import defaultErrorMessages from "../../utils/default-error-messages";
import {MODEL_PARAMS} from "../../settings/setting";
import {alertSet} from "../alert";
import MODEL_ACTIONS_LIST from "../../settings/models-actions-list";
import {deleteObject} from "./detail";

const defaultListRequested = () => {
    return {
        type: 'FETCH_LIST_REQUEST'
    };
};

const defaultListLoaded = (list) => {
    return {
        type: 'FETCH_LIST_SUCCESS',
        payload: list
    };
};

const deleteObjectFromList = (id) => {
    return {
        type: 'DELETE_OBJECT_FROM_LIST',
        payload: id
    };
};


const defaultListError = (error) => {
    return {
        type: 'FETCH_LIST_FAILURE',
        payload: error
    };
};

const getList = (SwapiService) => (modelName,match, search = '') => async (dispatch) => {
    const {
        errorResponse = defaultListError,
        loadData = defaultListLoaded,
        requestServer = defaultListRequested
    } = MODEL_ACTIONS_LIST[modelName] || {};

    const modelParams = MODEL_PARAMS[modelName];
    if (!modelParams) {
        dispatch(errorResponse(defaultErrorMessages(404)));
        return null
    }
    const url = modelParams.url({search,match});
    dispatch(requestServer());
    const res = await SwapiService.getResource(url);
    switch (res.status) {
        case 200:
            dispatch(loadData(res.data));
            break;
        default:
            dispatch(errorResponse(defaultErrorMessages(res.status)))

    }
};

const deleteObjectListAction = (SwapiService) => (modelName, id) => async (dispatch) => {
    const {
        deleteListObject = deleteObjectFromList
    } = MODEL_ACTIONS_LIST[modelName] || {};
    const res = await deleteObject(SwapiService)(modelName, id)(dispatch)
    if (res.deleted) {
        dispatch(deleteListObject(id))
        dispatch(alertSet({type: 'success', message: 'Удалено'}))
    } else {
        dispatch(alertSet({type: 'error', message: res.res.status + ' Ошибка'}))
    }
};


export {getList, deleteObjectListAction,deleteObjectFromList}
