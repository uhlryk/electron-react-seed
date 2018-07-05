import uuid from "uuid";
import * as actionTypes from "./actionTypes";

export function addNew(title) {
    return {
        type: actionTypes.ADD_NEW,
        payload: {
            title,
            id: uuid()
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
