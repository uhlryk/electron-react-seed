import React from "react";
import { inject } from "mobx-react";

@inject("store")
class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(evt) {
        const text = evt.target.value;
    }

    render() {
        const list = this.props.store.taskStore.tasks.map(task => <div key={task.id}>{task.content}</div>)
        return (
            <div>
                { list }
            </div>
        );
    }
}

ListTasks.propTypes = {};

export default ListTasks;
