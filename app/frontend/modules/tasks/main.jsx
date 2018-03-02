import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ListTasks from "./components/ListTasks";
import AddTaskForm from "./components/AddTaskForm";
import RemoveTask from "./components/RemoveTask";
import { getTasks } from "./selectors";

const ListTaskWrapper = withRouter(
    connect(state => ({
        tasks: getTasks(state)
    }))(ListTasks)
);

const AddTaskFormWrapper = withRouter(
    connect()(AddTaskForm)
);

const RemoveTaskWrapper = withRouter(
    connect(state => ({
        tasks: state.tasks
    }))(RemoveTask)
);

const main = ({ match }) => (
    <div>
        <h3>Tasks section</h3>
        <ul>
            <li>
                <Link to={match.url}>tasksList {match.url}</Link>
            </li>
            <li>
                <Link to={`${match.url}/add`}>Add Task</Link>
            </li>
        </ul>

        <hr />

        <Route exact path={match.url} component={ListTaskWrapper} />
        <Route
            path={`${match.url}/add`}
            render={() => <AddTaskFormWrapper onSuccessRedirect={match.url} />}
        />
        <Route
            path={`${match.url}/remove/:taskId`}
            render={() => <RemoveTaskWrapper onSuccessRedirect={match.url} />}
        />
    </div>
);

export default main;
