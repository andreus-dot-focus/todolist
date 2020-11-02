import { GET_TODOS, SET_CURRENT_TODO } from "../actions/TodosActions";

export const initialState = {
    todos:[],
    currentListId: 1,
    isFetching:false,
}

export function todosReducer(state = initialState, action){
    switch (action.type) {
        case GET_TODOS:
            return{...state, todos:action.payload.todos, currentListId:action.payload.currentListId}
        case SET_CURRENT_TODO:
            return{...state, currentListId:action.payload}
        default:
            return state       
    }
}