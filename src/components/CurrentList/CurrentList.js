import React from 'react';
import {List} from '../List/List';
import {AddItem} from '../AddItem/AddItem';
import '../styles/CurrentList.css'

class CurrentList extends React.Component{
      handleAddItems = data => {
        const newList = [data, ...this.state.list];
        this.setState({list:newList});
      };
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