import DeleteTask from "../components/DeleteTask";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LIST_ROUTE_PATH } from "../constants";
import { remove } from "../actions";

export default withRouter(
    connect(
        (state, props) => ({
            task: state.tasks.find(task => task.id === props.match.params.taskId)
        }),
        (dispatch, props) => ({
            onDeleteClick(taskId) {
                dispatch(remove(taskId));
                props.history.push(LIST_ROUTE_PATH);
            }
        })
    )(DeleteTask)
);
