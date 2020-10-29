export const GET_TODOS = 'GET_TODOS'


export function getTodos(){
    return dispatch=>{
        fetch('http://localhost:3000/data/toDoData.json')
           .then(response => {
             return response.json()
           })
           .then(data => {
            dispatch({
                type:GET_TODOS,
                payload: data
            })
           })

    }
}