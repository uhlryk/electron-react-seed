import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import classNames from "classnames";
import styles from "./styles.scss";

class RootComponent extends React.Component {
    render() {
        const { i18n, t } = this.props;
        return (
            <React.Fragment>
                <a
                    className={classNames([styles.language], {
                        [styles.active]: i18n.language
                            ? i18n.language === "en"
                            : true
                    })}
                    onClick={() => i18n.changeLanguage("en")}
                >
                    {t("en")}
                </a>
                <a
                    className={classNames([styles.language], {
                        [styles.active]: i18n.language
                            ? i18n.language === "de"
                            : false
                    })}
                    onClick={() => i18n.changeLanguage("de")}
                >
                    {t("de")}
                </a>
            </React.Fragment>
        );
    }
}

RootComponent.propTypes = {
    t: PropTypes.func.isRequired,
    i18n: PropTypes.object.isRequired
};

export default translate("general")(RootComponent);
