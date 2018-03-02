import React from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import styles from "../styles.scss";
import { remove } from "../actions";
import PropTypes from "prop-types";

class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.dispatch(remove(this.props.match.params.taskId));
        this.props.onSuccessRedirect &&
            this.props.history.push(this.props.onSuccessRedirect);
    }

    render() {
        return (
            <div>
                <h3>Do you want remove</h3>
                <div className={classNames(styles.exampleText, "lead")}>
                    {
                        this.props.tasks.tasks.find(
                            task => task.id === this.props.match.params.taskId
                        ).title
                    }
                </div>
                <button onClick={this.onDeleteClick}>Delete</button>
            </div>
        );
    }
}

DeleteTask.propTypes = {
    onSuccessRedirect: PropTypes.string
};

export default DeleteTask;
