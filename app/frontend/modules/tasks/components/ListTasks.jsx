import React, { Fragment } from "react";
import Element from "./Element";

class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(taskId) {
        this.props.onDeleteClick(taskId)
    }

    render() {
        const list = this.props.tasks.tasks.map(task => (
            <Element key={task.id} id={task.id} title={task.title} onDelete={this.onDeleteClick} />
        ));
        return <Fragment>{list}</Fragment>;
    }
}

export default ListTasks;
