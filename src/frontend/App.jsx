import React from "react";
import { MemoryRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ExtensionerProvider, ExtensionerEvent } from "react-extensioner";
import reducers from "./reducers/index";
import epics from "./epics/index";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { reducer as notifications } from "react-notification-system-redux";
import { I18nextProvider } from "react-i18next";
import translations from "./translations/index";

import managerCreator from "../modules/frontend";
const extensionManager = managerCreator();


const epicMiddleware = createEpicMiddleware(
    combineEpics(...epics, ...[].concat(...Object.values(extensionManager.getPropertyValues("epics"))))
);
const store = createStore(
    combineReducers(
        Object.assign(reducers, { notifications }, extensionManager.getPropertyValues("reducer"))
    ),
    {},
    composeWithDevTools(applyMiddleware(epicMiddleware))
);

const initRedirectList = Object.values(extensionManager.getPropertyValues("initRedirect"));
const initRedirect = initRedirectList[0];
let memoryRouterOptions = {};
if(initRedirect) {
    memoryRouterOptions = {
        initialEntries: [ initRedirect ],
        initialIndex: 1
    };
}
const translationResources = extensionManager.getPropertyValues("translation");
Object.values(translationResources).forEach((langResource) => {
    Object.entries(langResource).forEach(([lang, namespaceResource]) => {
        Object.entries(namespaceResource).forEach(([namespace, resource]) => {
            translations.addResources(lang, namespace, resource);
        });
    });
});
export default class App extends React.Component {
    render() {
        return (
            <ExtensionerProvider manager={extensionManager}>
                <Provider store={store}>
                    <I18nextProvider i18n={translations}>
                        <MemoryRouter { ...memoryRouterOptions } >
                            <div>
                                <h2>{translations.t("appName")}</h2>
                                <ul>
                                    <ExtensionerEvent
                                        name={"onRenderMenuLink"}
                                        value={translations}
                                    />
                                </ul>

                                <hr />
                                <Switch>
                                    <ExtensionerEvent name={"onRenderRoute"} />
                                </Switch>
                                <ExtensionerEvent name={"onRenderRootComponent"} />
                            </div>
                        </MemoryRouter>
                    </I18nextProvider>
                </Provider>
            </ExtensionerProvider>
        );
    }
}
