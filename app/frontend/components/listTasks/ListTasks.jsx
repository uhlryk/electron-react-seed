import React from "react";
import { inject, observer } from "mobx-react";
import {withRouter} from "react-router-dom";

@withRouter
@inject("store") @observer
class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(taskId) {
        this.props.history.push(`/remove/${taskId}`);
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
