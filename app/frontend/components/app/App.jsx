import React from "react";
import styles from "./app.scss";

export default class App extends React.Component {
  render() {
    return (<div>
      <h2 className={styles.header}>Welcome to React!</h2>
    </div>);
  }
}
