import React from 'react';
import {connect} from 'react-redux'
import {Todos} from './components/Todos/Todos';
import './App.css'
import { getTodos } from './actions/TodosActions';
class App extends React.Component {
  render(){
    const {todos, getTodosAction} = this.props
    return(
        <div className="app container">
          <Todos todos={todos} getTodos={getTodosAction}></Todos>
          {/* <CurrentList currentList={currentList}></CurrentList> */}
        </div>
    )
  }
}

const mapStateToProps = store => ({
  todos: store.todos,
  currentList: store.currentList,
})

const mapDispatchToProps = dispatch => ({
  getTodosAction: ()=>dispatch(getTodos())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

