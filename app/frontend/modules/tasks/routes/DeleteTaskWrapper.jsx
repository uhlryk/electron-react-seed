import DeleteTask from "../components/DeleteTask";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LIST_ROUTE_PATH } from "../constants";
import { push } from "react-router-redux";
import { remove } from "../actions";

export default withRouter(
    connect(
        (state, props) => ({
            task: state.tasks.tasks.find(task => task.id === props.match.params.taskId)
        }),
        dispatch => ({
            onDeleteClick(taskId) {
                dispatch(remove(taskId));
                dispatch(push(LIST_ROUTE_PATH));
            }
        })
    )(DeleteTask)
);
