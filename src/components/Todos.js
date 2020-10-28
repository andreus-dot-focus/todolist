import React from 'react';
import '../styles/Todos.css'
import {Filter} from './Filter'
import {TodosLists} from './TodosLists'
import {AddList} from './AddList'

class Todos extends React.Component{
    render(){
        return(
            <div className="todos">
                <Filter></Filter>
                <TodosLists></TodosLists>
                <AddList></AddList>
            </div>
        )
    }
}
export {Todos};