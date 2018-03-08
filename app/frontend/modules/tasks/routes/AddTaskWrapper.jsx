import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import AddTaskForm from "../components/AddTaskForm";
import {addNew} from "../actions";

export default withRouter(
    connect(state => state, dispatch => ({
        onAddTask(title) {
            dispatch(addNew(title));
        }
    }))(AddTaskForm)
);
