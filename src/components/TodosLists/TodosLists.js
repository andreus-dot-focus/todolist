import React from 'react'
import TodosItem from '../TodosItem/TodosItem'

class TodosLists extends React.Component{
    renderList = () => {
        const { todos, currentListId } = this.props.data;
        let list = null;
        let isCurrent = false;
        if (todos?.length) {
          list = todos.map(function (item) {
            if(item.listId === currentListId)
            isCurrent = true;
            else isCurrent = false;
            return <TodosItem key={item.listId} text={item.name} listId={item.listId} isCurrent={isCurrent}/>;
          });
          
        } else {
          list = <p className="text-secondary">Нет дел</p>;
        }
        return list;
      };
    render(){
        return(    
        <React.Fragment>
            {this.renderList()}
        </React.Fragment>
        )
    }
}

export {TodosLists}