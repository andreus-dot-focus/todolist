export const GET_TODOS = 'GET_TODOS'
export const SET_CURRENT_TODO = 'SET_CURRENT_TODO'


export function getTodos(){
    return dispatch=>{
        fetch('http://localhost:3000/data/toDoData.json')
           .then(response => {
             return response.json()
           })
           .then(data => {
            dispatch({
                type:GET_TODOS,
                payload: {
                    todos:data,
                    currentListId:data[0]["listId"]
                }
            })
           })
    }
}

export function setCurrentTodo(listId){
    return dispatch=>{
        dispatch({
            type: SET_CURRENT_TODO,
            payload:listId,
        })
    }
}