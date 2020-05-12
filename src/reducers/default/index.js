import {combineReducers} from "redux";
import defaultOptions from "./default-options";
import defaultDetail from "./default-detail";
import defaultList from "./default-list";

const defaults = combineReducers({
    defaultOptions: defaultOptions,
    defaultDetail:defaultDetail,
    defaultList:defaultList,
});

export default defaults;