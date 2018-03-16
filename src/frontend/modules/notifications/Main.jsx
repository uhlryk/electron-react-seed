import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notifications from "react-notification-system-redux";

class Main extends React.Component {

    render() {
        const { notifications } = this.props;

        return (
            <Notifications
                notifications={ notifications }
            />
        );
    }
}

Main.contextTypes = {
    store: PropTypes.object
};

Main.propTypes = {
    notifications: PropTypes.array
};

export default connect(
    state => ({ notifications: state.notifications })
)(Main);
