import React from 'react'
import {TodosItem} from '../TodosItem/TodosItem'

class TodosLists extends React.Component{
    renderList = () => {
        const { todos } = this.props.data;
        let list = null;
    
        if (todos?.length) {
          list = todos.map(function (item) {
            return <TodosItem key={item.listId} text={item.name} listId={item.listId}/>;
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