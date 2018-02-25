import React from "react";
import { MemoryRouter, Route, Link, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { createStore } from "redux";

import * as tasks from "./modules/tasks/index";

const store = createStore(reducer, {});
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <div>
                        <h2>TODO base app</h2>
                        <ul>
                            <li>
                                <Link to="/tasks">tasksList</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route path="/tasks" component={tasks.route} />
                        <Redirect exact from="/" to="/tasks" />
                    </div>
                </MemoryRouter>
            </Provider>
        );
    }
}
