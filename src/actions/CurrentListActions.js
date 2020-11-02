export const GET_CURRENT_LIST = 'GET_CURRENT_LIST';

export function getCurrentList(listId){
    return dispatch=>{
        fetch('http://localhost:3000/data/toDoData.json')
           .then(response => {
             return response.json()
           })
           .then(data => {
               let curr = data.find(item => item["listId"]===listId);
            dispatch({
                type:GET_CURRENT_LIST,
                payload: {
                    listId:listId,
                    list:curr.list
                }
            })
           })

    }
}