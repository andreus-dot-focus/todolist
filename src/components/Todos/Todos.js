import React from 'react';
import PropTypes from 'prop-types'
import './Todos.css'
import {Filter} from '../Filter/Filter'
import {TodosLists} from '../TodosLists/TodosLists'
import {AddList} from '../AddList/AddList'

class Todos extends React.Component{
    componentDidMount(){
        this.props.getTodos();
    }
    render(){
        const {todos} = this.props;
        return(
            <div className="todos">
                <Filter></Filter>
                <TodosLists data={todos}></TodosLists>
                <AddList></AddList>
            </div>
        )
    }
}

Todos.propTypes = {
    getTodos: PropTypes.func.isRequired,
}
export {Todos};