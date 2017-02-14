export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';

export function addItem(item) {
    return {
        type: ADD_ITEM, 
        item
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM, 
        id
    }
}

export function checkItem(id) {
    return {
        type: CHECK_ITEM, 
        id
    }
}