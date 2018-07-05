import * as epicActionTypes from "./epicActionTypes";

export function startAddNew(title) {
    return {
        type: epicActionTypes.START_ADD_NEW,
        payload: {
            title
        }
    };
}
