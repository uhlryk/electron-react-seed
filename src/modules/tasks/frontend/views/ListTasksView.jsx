import ListTasks from "../components/ListTasks";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { getTasks } from "../selectors";
import { DELETE_ROUTE_PATH, NAME } from "../constants";

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
    )(translate(NAME)(ListTasks))
);
