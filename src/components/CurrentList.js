import React from 'react';
import {List} from './List';
import {AddItem} from './AddItem';
import '../styles/CurrentList.css'

class CurrentList extends React.Component{
    state={
        list:null,
      } 
      handleAddItems = data => {
        const newList = [data, ...this.state.list];
        this.setState({list:newList});
      };
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
    render(){
        return(
            <div className="current-list">
                <header>Список дел</header>
                <div className="container">
                    <List data={this.state.list}/>
                    <AddItem onAddItem={this.handleAddItems} />
                </div>
            </div>
        )
    }
}

export {CurrentList};