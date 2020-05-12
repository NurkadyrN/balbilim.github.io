import {
    quizzesDetailError,
    quizzesDetailLoaded,
    quizzesDetailRequested
} from "../actions/quizzes/detail";
import {questionsDetailError, questionsDetailLoaded, questionsDetailRequested} from "../actions/questions/detail";
import {answersDetailLoaded, answersDetailRequested, answersDetailError} from "../actions/questions";
import {classroomSubmitValidate} from "../actions/classroom/hooks";
import {quizzesSubmitValidate} from "../actions/quizzes/hooks";
import {subjectsAddListObject} from "../actions/subjects/subjects-list";
import {defaultDetailLoaded} from "../actions/default";


const MODEL_ACTIONS_DETAIL = {
    ClassRoom: {
        submitValidateModel: classroomSubmitValidate,
    },
    Subjects: {
        loadData: (data) => (dispatch) => {
            dispatch(subjectsAddListObject(data));
            dispatch(defaultDetailLoaded(data))
        },
        afterCreate: subjectsAddListObject,
        submitValidateModel: quizzesSubmitValidate
    },
    Units: {
        submitValidateModel: quizzesSubmitValidate
    },
    Quizzes: {
        requestServer: quizzesDetailRequested,
        loadData: quizzesDetailLoaded,
        errorResponse: quizzesDetailError,
        submitValidateModel: quizzesSubmitValidate
    },
    Questions: {
        requestServer: questionsDetailRequested,
        loadData: questionsDetailLoaded,
        errorResponse: questionsDetailError
    },
    SimpleTest: {
        requestServer: questionsDetailRequested,
        loadData: questionsDetailLoaded,
        errorResponse: questionsDetailError,
    },
    Matching: {
        requestServer: questionsDetailRequested,
        loadData: questionsDetailLoaded,
        errorResponse: questionsDetailError,
    },
    DragAndDrop: {
        requestServer: questionsDetailRequested,
        loadData: questionsDetailLoaded,
        errorResponse: questionsDetailError,
    },
    FillTheBlanks: {
        requestServer: questionsDetailRequested,
        loadData: questionsDetailLoaded,
        errorResponse: questionsDetailError,
    },
    AnswerSimpleTest: {
        requestServer: answersDetailRequested,
        loadData: answersDetailLoaded,
        errorResponse: answersDetailError,
        afterCreate: answersDetailLoaded
    },
    AnswerMatching: {
        requestServer: answersDetailRequested,
        loadData: answersDetailLoaded,
        errorResponse: answersDetailError,
        afterCreate: answersDetailLoaded
    },
}
export default MODEL_ACTIONS_DETAIL;
