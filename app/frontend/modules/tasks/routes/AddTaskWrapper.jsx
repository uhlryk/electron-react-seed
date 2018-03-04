import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import AddTaskForm from "../components/AddTaskForm";
import {addNew} from "../actions";
import {LIST_ROUTE_PATH} from "../constants";
import {push} from "react-router-redux";

export default withRouter(
    connect(state => state, dispatch => ({
        onAddTask(title) {
            dispatch(addNew(title));
            dispatch(push(LIST_ROUTE_PATH));
        }
    }))(AddTaskForm)
);
