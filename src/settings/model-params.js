import setSearchParams from "../utils/set-search-params";
import {getLocalStorage} from "../hooks";


const MODEL_PARAMS = {
    ClassRoom: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/classroom/classroom/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Класстык Болбо',
        onMenu: false,
        listPage: false,
    },
    Subjects: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            params['classroom'] = getLocalStorage('classroomId')
            return `/classroom/subjects/` + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Сабактар',
        onMenu: true,
        listPage: false,
    },
    Quizzes: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            const {params: {subjectId, unitId} = {}} = match;
            if (unitId) {
                params['units'] = unitId
            } else if (subjectId) {
                params['subjects'] = subjectId
            }

            return '/classroom/quizzes/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Тесттер',
        onMenu: false,
        listPage: false,
    },
    Units: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            if (match.params && match.params.subjectId) {
                params['subject'] = match.params.subjectId;
            }
            return '/classroom/units/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Темалар',
        onMenu: false,
        listPage: false,
    },
    Questions: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/questions/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Суроолор',
        onMenu: false,
        listPage: false,
    },
    SimpleTest: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/simple_test/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тест',
        onMenu: false,
        listPage: false,
    },
    AnswerSimpleTest: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/answer_simple_test/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тестин Жооптору',
        onMenu: false,
        listPage: false,
    },
    Matching: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/matching/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тестин Жооптору',
        onMenu: false,
        listPage: false,
    },
    AnswerMatching: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/answer_matching/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тестин Жооптору',
        onMenu: false,
        listPage: false,
    },
    DragAndDrop: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/drag_and_drop/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тестин Жооптору',
        onMenu: false,
        listPage: false,
    },
    FillTheBlanks: {
        url: ({match = {}, subUrl = '', params = {}, search = ''} = {}) => {
            return '/questions/fill_the_blanks/' + subUrl + setSearchParams(search, params, '?')
        },
        label: 'Жонокой Тестин Жооптору',
        onMenu: false,
        listPage: false,
    },
};
export default MODEL_PARAMS;
