export const ADD_NEW = "tasks.add_new";
export const REMOVE = "tasks.remove";

export function addNew(title) {
    return {
        type: ADD_NEW,
        payload: {
            title
        }
    };
}

export function remove(taskId) {
    return {
        type: REMOVE,
        payload: {
            id: taskId
        }
    };
}
