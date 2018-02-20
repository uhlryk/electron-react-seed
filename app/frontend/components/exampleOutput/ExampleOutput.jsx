import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./exampleOutput.scss";

const ExampleOutput = ({ text }) => <div className={classNames(styles.exampleText, "lead")}>{text}</div>;

ExampleOutput.propTypes = {
    text: PropTypes.string.isRequired
};

export default ExampleOutput;
