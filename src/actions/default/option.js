import defaultErrorMessages from "../../utils/default-error-messages";
import {MODEL_PARAMS} from "../../settings/setting";


const defaultOptionsRequested = () => {
    return {
        type: 'FETCH_OPTIONS_REQUEST'
    };
};

const defaultOptionsLoaded = (options) => {
    return {
        type: 'FETCH_OPTIONS_SUCCESS',
        payload: options
    };
};

const setModelOptions = (model) => {
    return {
        type: 'SET_MODEL_OPTIONS',
        payload: model
    };
};

const defaultOptionsError = (error) => {
    return {
        type: 'FETCH_OPTIONS_FAILURE',
        payload: error
    };
};

const getDefaultOptions = (SwapiService) => (modelName) => async (dispatch) => {
    const modelParams = MODEL_PARAMS[modelName];
    if (!modelParams) {
        dispatch(defaultOptionsError(defaultErrorMessages(404)));
        return null
    }
    const url = modelParams.url();
    dispatch(defaultOptionsRequested());
    const res = await SwapiService.getOptions(url);
    const data = res.data['POST'];
    switch (res.status) {
        case 200:
            dispatch(defaultOptionsLoaded(data));
            dispatch(setModelOptions(modelName))
            break;
        default:
            dispatch(defaultOptionsError(defaultErrorMessages(res.status)));
    }
};

export {getDefaultOptions,defaultOptionsRequested}
