import React from 'react';
import {connect} from 'react-redux'
import {Todos} from './components/Todos/Todos';
import {CurrentList} from './components/CurrentList/CurrentList';
import './App.css'
import { getTodos } from './actions/TodosActions';
import { getCurrentList } from './actions/CurrentListActions';
class App extends React.Component {
  render(){
    const {todos, getTodosAction, currentList, getCurrentListAction} = this.props
    return(
        <div className="app container">
          <Todos todos={todos} getTodos={getTodosAction} ></Todos>
          <CurrentList currentList={currentList} getCurrentList={getCurrentListAction} listId={todos.currentListId}></CurrentList>
        </div>
    )
  }
}

const mapStateToProps = store => ({
  todos: store.todos,
  currentList: store.currentList,
})

const mapDispatchToProps = dispatch => ({
  getTodosAction: ()=>dispatch(getTodos()),
  getCurrentListAction: (listId)=>dispatch(getCurrentList(listId))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

