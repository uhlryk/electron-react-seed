import { observable, action } from "mobx";
import uuid from "uuid";

class TaskStore {
    @observable tasks = [];

    @action.bound
    addTask(task) {
        this.tasks.push({
            content: task,
            id: uuid()
        });
    }
}

export default TaskStore;
