import { observable, action } from "mobx";

class TaskStore {
    @observable tasks = [];

    @action.bound
    addTask(task) {
        this.tasks.push({
            task: task
        });
    }
}

export default TaskStore;
