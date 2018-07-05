import { Manager } from "extensioner";
import tasksExtension from "./tasks/backend";

export default () => {
    const extensionManager = new Manager();
    extensionManager.registerExtension("tasks", tasksExtension());
    return extensionManager;
};
