import uuid from "uuid";
import { ADD_NEW, REMOVE } from "./actions";

/**
 *  state
 *  {
 *      tasks: [{
 *          title: string
 *          id: uuid
 *      }]
 *  }
 */

export default (state = { tasks: [] }, action) => {
    switch (action.type) {
        case ADD_NEW:
            return Object.assign({}, state, {
                tasks: (state.tasks || []).concat(
                    Object.assign({}, action.payload, { id: uuid() })
                )
            });
        case REMOVE:
            return Object.assign({}, state, {
                tasks: (state.tasks || []).filter(task => task.id !== action.payload.id)
            });
        default:
            return state;
    }
};
