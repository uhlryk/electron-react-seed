import * as actionTypes from "./actionTypes";

export function addNew(title) {
    return {
        type: actionTypes.ADD_NEW,
        payload: {
            title
        }
    };
}

export function remove(taskId) {
    return {
        type: actionTypes.REMOVE,
        payload: {
            id: taskId
        }
    };
}
