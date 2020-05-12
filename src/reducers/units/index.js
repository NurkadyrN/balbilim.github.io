import {combineReducers} from "redux";
import unitsList from "./units-list";
import unitsDetail from "./units-detail";

const units = combineReducers({
    unitsList: unitsList,
    unitsDetail:unitsDetail,
});

export default units;
