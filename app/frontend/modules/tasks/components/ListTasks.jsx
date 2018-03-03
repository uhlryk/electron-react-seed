import React from "react";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import {getTasks} from "../selectors";
import {withRouter} from "react-router-dom";

class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(taskId) {
        this.props.dispatch(push(`${this.props.match.url}/remove/${taskId}`));
    }

    render() {
        const list = this.props.tasks.tasks.map(task => (
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                    <button
                        className="button button--danger"
                        onClick={() => this.onDeleteClick(task.id)}
                    >
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

export default withRouter(
    connect(state => ({
        tasks: getTasks(state)
    }))(ListTasks)
);
