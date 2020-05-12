import {combineReducers} from "redux";
import questionsDetail from "./detail";
import answers from "./answers";

const questions = combineReducers({
    questionsDetail: questionsDetail,
    answers:answers
});

export default questions;
