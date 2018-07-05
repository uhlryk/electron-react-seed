import DeleteTask from "../components/DeleteTask";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { LIST_ROUTE_PATH, NAME } from "../constants";
import { remove } from "../actions";
import { findTask } from "../selectors";

export default withRouter(
    connect(
        (state, props) => ({
            task: findTask(state, props)
        }),
        (dispatch, props) => ({
            onDeleteClick(taskId) {
                dispatch(remove(taskId));
                props.history.push(LIST_ROUTE_PATH);
            }
        })
    )(translate(NAME)(DeleteTask))
);
