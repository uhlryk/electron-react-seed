import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addNew } from "../../actions/tasks";

@withRouter
@connect(state => ({
    taskReducer: state.taskReducer
}))
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
        this.props.dispatch(addNew(this.state.title));
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <input className="input" onChange={this.onChangeTitle} value={this.state.title} />
                <button className="button button--normal" onClick={this.onAddTask}>
                    Save
                </button>
            </div>
        );
    }
}

AddTaskForm.propTypes = {};

export default AddTaskForm;
