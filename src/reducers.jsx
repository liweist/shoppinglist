import { combineReducers } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, CHECK_ITEM } from './actions';

function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.item
            ];
        case REMOVE_ITEM:
            state.splice(action.id, 1);
            return Object.assign([], state);
        case CHECK_ITEM:
            return [
                ...state.slice(0, action.id),
                Object.assign({}, state[action.id], {
                    check: !state[action.id].check
                }),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
}

const reducers = combineReducers({
    items
});

export default reducers;