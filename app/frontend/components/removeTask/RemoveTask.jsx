import React from "react";
import { inject, observer } from "mobx-react";
import {withRouter} from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.scss";

@withRouter
@inject("store") @observer
class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.store.taskStore.removeTask(this.props.match.params.taskId);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h3>Do you want remove</h3>
                <div className={classNames(styles.exampleText, "lead")}>{this.props.store.taskStore.tasks.find(task => task.id === this.props.match.params.taskId).content}</div>
                <button onClick={this.onDeleteClick}>Delete</button>
            </div>
        );
    }
}

DeleteTask.propTypes = {};

export default DeleteTask;
