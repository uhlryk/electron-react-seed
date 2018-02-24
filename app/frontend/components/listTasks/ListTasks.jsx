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
        const list = this.props.store.taskStore.tasks.map(task => (
            <tr key={task.id}>
                <td>{task.content}</td>
                <td>
                    <button className="button button--danger" onClick={ () => this.onDeleteClick(task.id) }>Delete</button>
                </td>
            </tr>
        ));
        return (
            <table className="table table-striped">
                <tbody>{list}</tbody>
            </table>
        );
    }
}

ListTasks.propTypes = {};

export default ListTasks;
