import React from "react";
import { Route, Link } from "react-router-dom";

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
            translation: translation,
            initRedirect: constants.LIST_ROUTE_PATH
        },
        events: {
            onRenderMenuLink: translations => (
                <li>
                    <Link to={constants.LIST_ROUTE_PATH}>
                        {translations.t(constants.NAME + ":" + constants.NAME)}
                    </Link>
                </li>
            ),
            onRenderRoute: () => (
                <Route path={constants.MODULE_ROUTE_PATH } component={Main} />
            )
        }
    };
}
