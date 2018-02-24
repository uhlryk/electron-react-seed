import React from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "./reducers/index.js";
import { createStore } from "redux";

import ListTasks from "./components/listTasks/ListTasks";
import AddTaskForm from "./components/addTaskForm/AddTaskForm";
import RemoveTask from "./components/removeTask/RemoveTask";

const store = createStore(reducer, {});
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <div>
                        <h2>Welcome to React!</h2>
                        <ul>
                            <li>
                                <Link to="/">List</Link>
                            </li>
                            <li>
                                <Link to="/add">Add Task</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" component={ListTasks} />
                        <Route path="/add" component={AddTaskForm} />
                        <Route path="/remove/:taskId" component={RemoveTask} />
                    </div>
                </MemoryRouter>
            </Provider>
        );
    }
}
