import { combineReducers } from "redux";
import * as tasks from "../modules/tasks/index";

export default combineReducers({
    [tasks.constants.NAME]: tasks.reducer
});
