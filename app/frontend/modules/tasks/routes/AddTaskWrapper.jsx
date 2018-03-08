import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import AddTaskForm from "../components/AddTaskForm";
import {startAddNew} from "../actions";

export default withRouter(
    connect(state => state, dispatch => ({
        onAddTask(title) {
            dispatch(startAddNew(title));
        }
    }))(AddTaskForm)
);
