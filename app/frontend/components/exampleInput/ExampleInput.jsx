import React from "react";
import PropTypes from "prop-types";

const ExampleInput = ({ onChange, text }) => (
    <div>
        <input onChange={ onChange } value={ text } />
    </div>
);

ExampleInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default ExampleInput;
