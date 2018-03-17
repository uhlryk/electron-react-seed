import _ from "lodash";
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import { translation } from "./modules/tasks/index";

const options = {
    fallbackLng: "en",

    // have a common namespace used around the full app
    // ns: ["translations"],
    // defaultNS: "translations",

    debug: true,

    interpolation: {
        escapeValue: false // not needed for react!!
    },
    resources: _.merge(translation),
    react: {
        wait: true
    }
};
i18n.use(reactI18nextModule).init(options);

export default i18n;
