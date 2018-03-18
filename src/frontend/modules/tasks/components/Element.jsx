import React from "react";
import PropTypes from "prop-types";

class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.id);
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <div>{this.props.title}</div>
                <div>
                    <button onClick={this.onDelete}>{t("deleteButton")}</button>
                </div>
            </div>
        );
    }
}

Element.propTypes = {
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Element;
