import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

const render = () => {
    const Root = require("./Root").default;
    ReactDOM.render(
        <AppContainer>
            <Root />
        </AppContainer>,
        document.getElementById("App")
    );
};

render();
if (module.hot) {
    module.hot.accept(render);
}
