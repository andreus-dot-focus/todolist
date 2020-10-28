import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Add.css'

class AddItem extends React.Component{
    state={
        text:'',
        isImportant:false,
    };

    onBtnClickHandler = e => {
        e.preventDefault();
        const { text, isImportant } = this.state;
        let now = new Date();
        let timeString = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
        this.props.onAddItem({
          id: +new Date(),
          time: timeString,
          text:text,
          isImportant:isImportant,
        });
      };

    handleChange=e=>{
        const{id,value}=e.currentTarget;
        this.setState({[id]:value});
    }

    handleChangeCheckbox=e=>{
        this.setState({isImportant:e.currentTarget.checked})
    }
    validate = () => {
        const { text } = this.state;
        if (text.trim()) {
          return true;
        }
        return false;
      };
    render(){
        const {text,isImportant} = this.state
        return(
        <div className="addBlock">
            <input placeholder="Введите Дело" id="text" type="text" name="" value={text} onChange={this.handleChange}/>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="isImportant" value={isImportant}  onChange={this.handleChangeCheckbox}/>
                <label htmlFor="isImportant" className="form-check-label">Срочное</label>
            </div>
                <button
                className="add__button" 
                type="button" 
                name="button" 
                onClick={this.onBtnClickHandler}
                disabled={!this.validate()}>Добавить дело</button>
        </div>
        )
    }
}

AddItem.propTypes = {
    onAddItem: PropTypes.func.isRequired
  };

export {AddItem}