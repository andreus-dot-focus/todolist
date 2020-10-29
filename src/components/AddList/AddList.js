import React from 'react';
import './AddList.css'

class AddList extends React.Component{
    render(){
        return(
            <div className="addBlock addList">
                <input placeholder="Введите список" id="text" type="text" name="" />
                <button
                className="add__button" 
                type="button" 
                name="button" >Добавить список</button>
            </div>
        )
    }
}

export {AddList}