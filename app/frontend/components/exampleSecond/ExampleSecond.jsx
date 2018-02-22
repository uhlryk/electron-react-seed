import React from "react";
import PropTypes from "prop-types";

const ExampleSecond = ({ match }) => (
    <div>
        {match.path}
        {match.params.pageId}
    </div>
);

ExampleSecond.propTypes = {
    match: PropTypes.object.isRequired
};

export default ExampleSecond;
