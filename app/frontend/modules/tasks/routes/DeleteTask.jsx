import React from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import styles from "../styles.scss";
import { remove } from "../actions";
import PropTypes from "prop-types";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import {LIST_ROUTE_PATH } from "../constants";
class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.dispatch(remove(this.props.match.params.taskId));
        this.props.dispatch(push(LIST_ROUTE_PATH));
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
};

export default withRouter(
    connect(state => ({
        tasks: state.tasks
    }))(DeleteTask)
);
