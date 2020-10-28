import React from 'react'
import {TodosItem} from './TodosItem'

class TodosLists extends React.Component{
    renderList = () => {
        const { data } = this.props;
        let list = null;
    
        if (data?.length) {
          list = data.map(function (item) {
            return <TodosItem key={item.id} data={item} />;
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