import {combineReducers} from "redux";
import classroomsList from "./classroom-list";
import classroomOptions from "./classroom-options";
import classroomDetail from "./classroom-detail";

const classroom = combineReducers({
    classroomsList: classroomsList,
    classroomOptions:classroomOptions,
    classroomDetail:classroomDetail
});

export default classroom;