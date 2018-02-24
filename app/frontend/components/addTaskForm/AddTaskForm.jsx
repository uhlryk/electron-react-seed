import React from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import {withRouter} from "react-router-dom";

@withRouter
@inject("store")
class AddTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onChangeTask(evt) {
        this.setState({
            task: evt.target.value
        });
    }

    onAddTask() {
        this.props.store.taskStore.addTask(this.state.task);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <input className="input" onChange={ this.onChangeTask } value={this.state.title} />
                <button className="button button--normal" onClick={ this.onAddTask }>Save</button>
            </div>
        );
    }
}


AddTaskForm.propTypes = {
};

export default AddTaskForm;
