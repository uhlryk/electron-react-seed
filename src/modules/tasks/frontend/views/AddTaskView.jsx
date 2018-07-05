import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import AddTaskForm from "../components/AddTaskForm";
import { startAddNew } from "../epicActions";
import { LIST_ROUTE_PATH, NAME } from "../constants";
export default withRouter(
    connect(
        state => state,
        (dispatch, props) => ({
            onAddTask(title) {
                dispatch(startAddNew(title));
                props.history.push(LIST_ROUTE_PATH);
            }
        })
    )(translate(NAME)(AddTaskForm))
);
