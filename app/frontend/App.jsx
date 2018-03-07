import React from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createMemoryHistory";
import reducers from "./reducers/index";
import { createStore, combineReducers, applyMiddleware } from "redux";

import * as tasks from "./modules/tasks/index";
const history = createHistory();

const store = createStore(
    combineReducers(Object.assign(reducers, { routing: routerReducer })),
    {},
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <h2>TODO base app</h2>
                        <ul>
                            <li>
                                <Link to={tasks.constants.MODULE_ROUTE_PATH}>
                                    {tasks.constants.NAME}
                                </Link>
                            </li>
                        </ul>

                        <hr />
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to={tasks.constants.MODULE_ROUTE_PATH}
                            />module
                            <Route
                                path={tasks.constants.MODULE_ROUTE_PATH}
                                component={tasks.Main}
                            />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
