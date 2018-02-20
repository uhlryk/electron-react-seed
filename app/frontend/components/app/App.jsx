import React from "react";
import styles from "./app.scss";
import ExampleParent from "../exampleParent/ExampleParent";
export default class App extends React.Component {
    render() {
        return (
            <div>
                <h2 className={styles.header}>Welcome to React!</h2>
                <ExampleParent />
            </div>
        );
    }
}
