import {combineReducers} from "redux";
import quizzesDetail from "./detail";
import quizzesList from "./list";

const quizzes = combineReducers({
    quizzesDetail:quizzesDetail,
    quizzesList:quizzesList
});

export default quizzes;
