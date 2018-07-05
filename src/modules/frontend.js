import { Manager } from "extensioner";
import notificationExtension from "./notifications/frontend";
import languageSwitcherExtension from "./languageSwitcher/frontend";
import tasksExtension from "./tasks/frontend";

export default () => {
    const extensionManager = new Manager();
    extensionManager.registerExtension("tasks", tasksExtension());
    extensionManager.registerExtension("languageSwitcher", languageSwitcherExtension());
    extensionManager.registerExtension("notifications", notificationExtension());

    return extensionManager;
};
