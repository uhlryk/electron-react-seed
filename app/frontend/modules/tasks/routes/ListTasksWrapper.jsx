import ListTasks from "./ListTasks";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getTasks} from "../selectors";
import {push} from "react-router-redux";
import {DELETE_ROUTE_PATH } from "../constants";
export default withRouter(
    connect(state => ({
        tasks: getTasks(state)
    }), dispatch => ({
        onDeleteClick(taskId) {
            dispatch(push(`${DELETE_ROUTE_PATH}/${taskId}`));
        }
    }))(ListTasks)
);
