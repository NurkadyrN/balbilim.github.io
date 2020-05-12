import MODEL_PARAMS from "./model-params";
import MODEL_ACTIONS_DETAIL from "./models-actions-detail";


const API_URL = 'http://nurkadyr.pythonanywhere.com';
const COOKIE_LIVE_TIME = 24 * 7;
const CK_EDITOR_UPLOAD_URL = `${API_URL}/documents/image_custom/ck_editor/`;
const MODEL_NAME_FORMS = [
    {
        modelName: 'SimpleTest',
        label: 'Жонокой тест'
    },
    {
        modelName: 'Matching',
        label: 'Уйкаштыруу'
    },
    {
        modelName: 'DragAndDrop',
        label: 'Алып Таштоо'
    },
    {
        modelName: 'FillTheBlanks',
        label: 'Боштуктарды Толтуру'
    }
]


export {
    API_URL,
    COOKIE_LIVE_TIME,
    MODEL_PARAMS,
    MODEL_ACTIONS_DETAIL,
    CK_EDITOR_UPLOAD_URL,
    MODEL_NAME_FORMS
}
