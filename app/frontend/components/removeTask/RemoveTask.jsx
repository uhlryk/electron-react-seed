import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.scss";
import { connect } from "react-redux";
import { addNew, remove } from "../../actions/tasks";

@withRouter
@connect(state => ({
    taskReducer: state.taskReducer
}))
class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.dispatch(remove(this.props.match.params.taskId));
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h3>Do you want remove</h3>
                <div className={classNames(styles.exampleText, "lead")}>
                    {this.props.taskReducer.tasks.find(task => task.id === this.props.match.params.taskId).title}
                </div>
                <button onClick={this.onDeleteClick}>Delete</button>
            </div>
        );
    }
}

DeleteTask.propTypes = {};

export default DeleteTask;
