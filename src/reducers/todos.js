import { GET_TODOS } from "../actions/TodosActions";

export const initialState = {
    todos:[],
    isFetching:false,
}

export function todosReducer(state = initialState, action){
    switch (action.type) {
        case GET_TODOS:
            return{...state, todos:action.payload}
        default:
            return state       
    }
}