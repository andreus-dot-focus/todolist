import React from 'react';
import {CurrentList} from './components/CurrentList';
import {Todos} from './components/Todos';
import './styles/App.css'
class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="app container">
          <Todos></Todos>
          <CurrentList></CurrentList>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
