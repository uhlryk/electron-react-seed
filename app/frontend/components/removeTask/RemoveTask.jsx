import React from "react";
import PropTypes from "prop-types";

const RemoveTask = ({ match }) => (
    <div>
        {match.path}
        {match.params.taskId}
    </div>
);

RemoveTask.propTypes = {
    match: PropTypes.object.isRequired
};

export default RemoveTask;
