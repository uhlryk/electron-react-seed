import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import AddTaskForm from "../components/AddTaskForm";
import {startAddNew} from "../actions";
import { LIST_ROUTE_PATH } from "../constants";
export default withRouter(
    connect(state => state, (dispatch, props) => ({
        onAddTask(title) {
            dispatch(startAddNew(title));
            props.history.push(LIST_ROUTE_PATH);
        }
    }))(AddTaskForm)
);
