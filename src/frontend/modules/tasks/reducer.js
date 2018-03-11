import * as actionTypes from "./actionTypes";

/**
 *  state
 *  [{
 *     title: string
 *     id: uuid
 *  }]
 */
const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW:
            return state.concat([Object.assign({}, action.payload)]);
        case actionTypes.REMOVE:
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state.slice();
    }
};
