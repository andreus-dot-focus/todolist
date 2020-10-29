import React from 'react';
import {connect} from 'react-redux'
import {CurrentList} from './components/CurrentList';
import {Todos} from './components/Todos';
import './styles/App.css'
class App extends React.Component {
  render(){
    return(
        <div className="app container">
          <Todos></Todos>
          <CurrentList></CurrentList>
        </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
}
export default connect(mapStateToProps)(App)

