import { combineReducers } from "redux";
import { currentListReducer } from "./currentList";
import { todosReducer } from "./todos";


  export const rootReducer = combineReducers({
      todos:todosReducer,
      currentList:currentListReducer,
  })