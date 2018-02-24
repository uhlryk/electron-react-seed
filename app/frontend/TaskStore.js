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
    @action.bound
    removeTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        this.tasks.remove(task);
    }
}

export default TaskStore;
