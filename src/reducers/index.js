import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
import userRedux from "./user";
import classroom from "./classroom";
import defaults from "./default";
import alertRedux from "./alert";
import questions from "./questions";
import quizzes from "./quizzes";
import subjects from "./subjects";
import units from "./units";


const appReducer = combineReducers({
    form: formReducer,
    user: userRedux,
    alert: alertRedux,
    classroom,
    defaults,
    questions,
    quizzes,
    subjects,
    units
});

const reducer = (state, action) => {
    if (action.type === 'UPDATE_STATE') {
        if (state.user.authenticated) {
            return appReducer(undefined, action)
        }
    }
    return appReducer(state, action)
};

export default reducer;
