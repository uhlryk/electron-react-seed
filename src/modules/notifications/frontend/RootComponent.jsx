import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notifications from "react-notification-system-redux";
import { translate } from "react-i18next";

class RootComponent extends React.Component {
    render() {
        const { notifications, t } = this.props;
        const translatedNotifications = notifications.map(notification =>
            Object.assign(
                {},
                notification,
                notification.message && {
                    message: t(notification.message)
                },
                notification.title && {
                    title: t(notification.title)
                }
            )
        );
        return <Notifications notifications={translatedNotifications} />;
    }
}

RootComponent.propTypes = {
    notifications: PropTypes.array,
    t: PropTypes.func.isRequired
};

export default connect(state => ({ notifications: state.notifications }))(translate("tasks")(RootComponent));
