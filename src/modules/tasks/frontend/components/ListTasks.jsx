import React, { Fragment } from "react";
import Element from "./Element";
import PropTypes from "prop-types";
import { callEvent } from "electron-extensioner";
class ListTasks extends React.Component {

    render() {
        callEvent("onLogBackend", "render List tasks");
        const list = this.props.tasks.map(task => (
            <Element
                t={this.props.t}
                key={task.id}
                id={task.id}
                title={task.title}
                onDelete={this.props.onDeleteClick}
            />
        ));
        return <Fragment>{list}</Fragment>;
    }
}

ListTasks.propTypes = {
    t: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    onDeleteClick: PropTypes.func.isRequired
};
export default ListTasks;
