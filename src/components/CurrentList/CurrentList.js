import React from 'react';
import {List} from '../List/List';
import {AddItem} from '../AddItem/AddItem';
import './CurrentList.css'
import PropTypes from 'prop-types'


class CurrentList extends React.Component{
    //   handleAddItems = data => {
    //     const newList = [data, ...this.state.list];
    //     this.setState({list:newList});
    //   };

    componentDidMount(){
        const {listId} = this.props;
        this.props.getCurrentList(listId)
    }
    render(){
        return(
            <div className="current-list">
                <header>Список дел</header>
                <div className="container">
                    <List data={this.props.currentList.list}/>
                    <AddItem  />
                </div>
            </div>
        )
    }
}

CurrentList.propTypes = {
    getCurrentList: PropTypes.func.isRequired,
    listId: PropTypes.number.isRequired
}

export {CurrentList};