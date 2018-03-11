import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import styles from "./styles/index.global.scss"; // eslint-disable-line

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const App = require("./App"); // eslint-disable-line global-require
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById("root")
        );
    });
}
