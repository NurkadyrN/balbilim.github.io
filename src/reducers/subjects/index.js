import {combineReducers} from "redux";
import subjectsList from "./subjects-list";
import subjectsDetail from "./subjects-detail";

const subjects = combineReducers({
    subjectsList: subjectsList,
    subjectsDetail:subjectsDetail,
});

export default subjects;
