import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import general from "./general";

const options = {
    fallbackLng: "en",

    ns: ["general"],
    defaultNS: "general",

    debug: true,

    interpolation: {
        escapeValue: false
    },
    resources: general,
    react: {
        wait: true
    }
};
i18n.use(reactI18nextModule).init(options);

export default i18n;
