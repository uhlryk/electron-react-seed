import React from "react";
import classNames from "classnames";
import styles from "../styles.scss";
import PropTypes from "prop-types";
class DeleteTask extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.onDeleteClick(this.props.task.id);
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <h3>{t("askForRemove")}</h3>
                <div className={classNames(styles.exampleText, "lead")}>
                    {this.props.task.title}
                </div>
                <button onClick={this.onDeleteClick}>{t("deleteButton")}</button>
            </div>
        );
    }
}

DeleteTask.propTypes = {
    t: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default DeleteTask;
