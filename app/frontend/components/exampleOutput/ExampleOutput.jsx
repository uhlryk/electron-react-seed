import React from "react";
import PropTypes from "prop-types";

const ExampleOutput = ({ text }) => <div>{text}</div>;

ExampleOutput.propTypes = {
    text: PropTypes.string.isRequired
};

export default ExampleOutput;
