import { GET_CURRENT_LIST } from "../actions/CurrentListActions";

export const initialState = {
    listId:1,
    list:[]
}

export function currentListReducer(state = initialState, action){
    switch (action.type) {
        case GET_CURRENT_LIST:
            return {...state, listId:action.payload.listId, list:action.payload.list}
        default:
            return state;
    }
}