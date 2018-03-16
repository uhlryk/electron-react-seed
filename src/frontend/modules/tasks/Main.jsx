import React from "react";
import { Link, Route } from "react-router-dom";
import ListTasksView from "./views/ListTasksView";
import AddTaskView from "./views/AddTaskView";
import DeleteTaskView from "./views/DeleteTaskView";
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
                    component={ListTasksView}
                />
                <Route path={constants.ADD_ROUTE_PATH} component={AddTaskView} />
                <Route
                    path={`${constants.DELETE_ROUTE_PATH}/:taskId`}
                    component={DeleteTaskView}
                />
            </div>
        );
    }
}

export default Main;
