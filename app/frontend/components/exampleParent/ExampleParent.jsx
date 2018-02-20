import React from "react";
import ExampleInput from "../exampleInput/ExampleInput";
import ExampleOutput from "../exampleOutput/ExampleOutput";
class ExampleParent extends React.Component {

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
        return <div>
            <ExampleInput onChange={ this.onInputChange } text={ this.state.text } />
            <ExampleOutput text={ this.state.text } />
        </div>;
    }
}

ExampleParent.propTypes = {};

export default ExampleParent;
