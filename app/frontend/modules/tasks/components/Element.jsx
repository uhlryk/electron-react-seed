import React from "react";
import PropTypes from "prop-types";

class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.id)
    }
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div><button onClick={this.onDelete}>Remove</button></div>
            </div>
        );
    }
}

Element.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Element;
