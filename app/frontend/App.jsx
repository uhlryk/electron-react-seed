import React from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createMemoryHistory";
import reducers from "./reducers/index";
import epics from "./epics/index";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import {reducer as notifications} from "react-notification-system-redux";

import * as tasks from "./modules/tasks/index";
import { Main as NotificationComponent } from "./modules/notifications/index";

const epicMiddleware = createEpicMiddleware(combineEpics(...epics));
const history = createHistory();

const store = createStore(
    combineReducers(Object.assign(reducers, { routing: routerReducer }, { notifications })),
    {},
    composeWithDevTools(applyMiddleware(routerMiddleware(history), epicMiddleware))
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
                        <NotificationComponent />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
