import ListTasks from "../components/ListTasks";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTasks } from "../selectors";
import { DELETE_ROUTE_PATH } from "../constants";

export default withRouter(
    connect(
        state => ({
            tasks: getTasks(state)
        }),
        (dispatch, props) => ({
            onDeleteClick(taskId) {
                props.history.push(`${DELETE_ROUTE_PATH}/${taskId}`);
            }
        })
    )(ListTasks)
);
