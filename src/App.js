import React from 'react';
import {CurrentList} from './components/CurrentList';
import {Add} from './components/Add';
class App extends React.Component {
  state={
    list:null,
  }
  componentDidMount() {
    this.setState({isLoading:true})
     fetch('http://localhost:3000/data/toDoData.json')
       .then(response => {
         return response.json()
       })
       .then(data => {
        this.setState({list:data})
       })
   }
  handleAddNews = data => {
    const newList = [data, ...this.state.list];
    this.setState({ list: newList });
  };
  render(){
    return(
      <React.Fragment>
        <header>Список дел</header>
        <div className="container">
        <Add onAddNews={this.handleAddNews} />
        <CurrentList data={this.state.list} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
