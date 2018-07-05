import { Manager } from "extensioner";
import notificationExtension from "./notifications/frontend";
import languageSwitcherExtension from "./languageSwitcher/frontend";
import tasksExtension from "./tasks/frontend";

export default () => {
    const manager = new Manager();
    manager.registerExtension("tasks", tasksExtension());
    manager.registerExtension("languageSwitcher", languageSwitcherExtension());
    manager.registerExtension("notifications", notificationExtension());

    return manager;
};
