import React from "react";
import { MemoryRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import epics from "./epics/index";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { reducer as notifications } from "react-notification-system-redux";
import { I18nextProvider } from "react-i18next";
import translations from "./translations/index";
import * as tasks from "./modules/tasks/index";
import { Main as LanguageSwitcherComponent } from "./modules/languageSwitcher/index";
import { Main as NotificationComponent } from "./modules/notifications/index";
const epicMiddleware = createEpicMiddleware(combineEpics(...epics));

const store = createStore(
    combineReducers(Object.assign(reducers, { notifications })),
    {},
    composeWithDevTools(applyMiddleware(epicMiddleware))
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <I18nextProvider i18n={ translations }>
                    <MemoryRouter>
                        <div>
                            <h2>{translations.t("appName")}</h2>
                            <ul>
                                <li>
                                    <Link to={tasks.constants.MODULE_ROUTE_PATH}>
                                        {translations.t(tasks.constants.NAME + ":" + tasks.constants.NAME)}
                                    </Link>
                                </li>
                            </ul>

                            <hr />
                            <Switch>
                                <Redirect
                                    exact
                                    from="/"
                                    to={tasks.constants.MODULE_ROUTE_PATH}
                                />
                                <Route
                                    path={tasks.constants.MODULE_ROUTE_PATH}
                                    component={tasks.Main}
                                />
                            </Switch>
                            <LanguageSwitcherComponent />
                            <NotificationComponent />
                        </div>
                    </MemoryRouter>
                </I18nextProvider>
            </Provider>
        );
    }
}
