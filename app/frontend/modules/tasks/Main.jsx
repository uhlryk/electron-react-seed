import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import ListTasks from "./components/ListTasks";
import AddTaskForm from "./components/AddTaskForm";
import DeleteTask from "./components/DeleteTask";

class Main extends React.Component {

    render() {
        return (
            <div>
                <h3>Tasks section</h3>
                <ul>
                    <li>
                        <Link to={this.props.match.url}>tasksList</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/add`}>Add Task</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path={this.props.match.url} component={ListTasks} />
                <Route
                    path={`${this.props.match.url}/add`}
                    render={() => <AddTaskForm onSuccessRedirect={this.props.match.url} />}
                />
                <Route
                    path={`${this.props.match.url}/remove/:taskId`}
                    render={() => <DeleteTask onSuccessRedirect={this.props.match.url} />}
                />
            </div>
        );
    }
}

export default Main;
