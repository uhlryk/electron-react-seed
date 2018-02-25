import React from "react";
import { MemoryRouter, Route, Link, Redirect, Switch } from "react-router-dom";
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
                                <Link to={tasks.constants.ROUTE_PATH}>{tasks.constants.NAME}</Link>
                            </li>
                        </ul>

                        <hr />
                        <Switch>
                            <Redirect exact from="/" to={tasks.constants.ROUTE_PATH} />
                            <Route
                                path={tasks.constants.ROUTE_PATH}
                                component={tasks.route}
                            />
                        </Switch>
                    </div>
                </MemoryRouter>
            </Provider>
        );
    }
}
