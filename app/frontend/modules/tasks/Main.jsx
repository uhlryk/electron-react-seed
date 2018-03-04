import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import ListTasksWrapper from "./routes/ListTasksWrapper";
import AddTaskForm from "./routes/AddTaskForm";
import DeleteTask from "./routes/DeleteTask";
import * as constants from "./constants";
class Main extends React.Component {
    render() {
        return (
            <div>
                <h3>Tasks section</h3>
                <ul>
                    <li>
                        <Link to={constants.LIST_ROUTE_PATH}>tasksList</Link>
                    </li>
                    <li>
                        <Link to={constants.ADD_ROUTE_PATH}>Add Task</Link>
                    </li>
                </ul>

                <hr />

                <Route
                    exact
                    path={constants.LIST_ROUTE_PATH}
                    component={ListTasksWrapper}
                />
                <Route path={constants.ADD_ROUTE_PATH} component={AddTaskForm} />
                <Route
                    path={`${constants.DELETE_ROUTE_PATH}/:taskId`}
                    component={DeleteTask}
                />
            </div>
        );
    }
}

export default Main;
