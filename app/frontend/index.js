import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/app/App";
import styles from "./styles/index.global.scss"; // eslint-disable-line

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept("./components/app/App", () => {
        const App = require("./components/app/App"); // eslint-disable-line global-require
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById("root")
        );
    });
}
