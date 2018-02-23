import React from "react";
class ListTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt) {
        const text = evt.target.value;
        this.setState((prevState, props) => ({ text }));
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

ListTasks.propTypes = {};

export default ListTasks;
