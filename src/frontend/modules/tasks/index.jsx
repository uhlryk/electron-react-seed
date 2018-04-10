import React, { Fragment }  from "react";
import { Route, Link, Redirect } from "react-router-dom";

import reducer from "./reducer";
import epics from "./epics";
import * as constants from "./constants";
import Main from "./Main";
import translation from "./translation";

export default function() {
    return {
        properties: {
            reducer: reducer,
            epics: epics,
            translation: translation
        },
        events: {
            onRenderMenuLink: (translations) => <li>
                <Link to={constants.MODULE_ROUTE_PATH}>
                    {translations.t(
                        constants.NAME +
                        ":" +
                        constants.NAME
                    )}
                </Link>
            </li>,
            onRenderRoute: () => <Fragment>
                <Redirect
                    exact
                    from="/"
                    to={constants.MODULE_ROUTE_PATH}
                />
                <Route
                    path={constants.MODULE_ROUTE_PATH}
                    component={Main}
                />
            </Fragment>
        }
    };
}
