import React from "react";
import PropTypes from "prop-types";

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onChangeTitle(evt) {
        this.setState({
            title: evt.target.value
        });
    }

    onAddTask() {
        this.props.onAddTask(this.state.title);
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <input
                    className="input"
                    onChange={this.onChangeTitle}
                    value={this.state.title}
                />
                <button className="button button--normal" onClick={this.onAddTask}>{t("saveButton")}</button>
            </div>
        );
    }
}

AddTaskForm.propTypes = {
    t: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired
};

export default AddTaskForm;
