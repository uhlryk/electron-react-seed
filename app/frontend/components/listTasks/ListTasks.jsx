import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

@withRouter
@connect(state => ({
    taskReducer: state.taskReducer
}))
class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(taskId) {
        this.props.history.push(`/remove/${taskId}`);
    }

    render() {
        console.log(this.props);
        const list = this.props.taskReducer.tasks.map(task => (
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                    <button className="button button--danger" onClick={() => this.onDeleteClick(task.id)}>
                        Delete
                    </button>
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
