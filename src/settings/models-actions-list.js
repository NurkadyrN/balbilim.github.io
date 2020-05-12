import {
    classroomDeleteObject,
    classroomListError,
    classroomListLoaded,
    classroomListRequested
} from "../actions/classroom/classroom-list";
import {unitsDeleteObject, unitsListError, unitsListLoaded, unitsListRequested} from "../actions/units/units-list";
import {
    subjectsDeleteListObject,
    subjectsListError,
    subjectsListLoaded,
    subjectsListRequested
} from "../actions/subjects/subjects-list";
import {quizzesDeleteObject, quizzesListError, quizzesListLoaded, quizzesListRequested} from "../actions/quizzes/list";


const MODEL_ACTIONS_LIST = {
    ClassRoom: {
        requestServer: classroomListRequested,
        loadData: classroomListLoaded,
        deleteListObject: classroomDeleteObject,
        errorResponse: classroomListError
    },
    Units: {
        requestServer: unitsListRequested,
        loadData: unitsListLoaded,
        deleteListObject: unitsDeleteObject,
        errorResponse: unitsListError
    },
    Subjects: {
        requestServer: subjectsListRequested,
        loadData: subjectsListLoaded,
        deleteListObject: subjectsDeleteListObject,
        errorResponse: subjectsListError
    },
    Quizzes: {
        requestServer: quizzesListRequested,
        loadData: quizzesListLoaded,
        errorResponse: quizzesListError,
        deleteListObject: quizzesDeleteObject
    }
}
export default MODEL_ACTIONS_LIST;
