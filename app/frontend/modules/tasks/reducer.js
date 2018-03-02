import * as actionTypes from "./actionTypes";

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
        case actionTypes.ADD_NEW:
            return Object.assign({}, state, {
                tasks: (state.tasks || []).concat([Object.assign({}, action.payload)])
            });
        case actionTypes.REMOVE:
            return Object.assign({}, state, {
                tasks: (state.tasks || []).filter(task => task.id !== action.payload.id)
            });
        default:
            return state;
    }
};
