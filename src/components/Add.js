import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component{
    state={
        text:'',
        isImportant:false,
    };

    onBtnClickHandler = e => {
        e.preventDefault();
        const { text, isImportant } = this.state;
        this.props.onAddItem({
          id: +new Date(),
          time: +new Date(),
          text,
          isImportant,
        });
      };

    handleChange=e=>{
        const{id,value}=e.currentTarget;
        this.setState({[id]:value});
    }

    handleChangeCheckbox=e=>{
        this.setState({agree:e.currentTarget.checked})
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
        <div class="row">
            <div class="col-6">
                <input placeholder="Введите Дело" id="text" type="text" name="" value={text} onChange={this.handleChange}/>
            </div>
        <div class="col-3">
            <div class="form-check">
                <input type="checkbox" id="isImportant" value={isImportant} class="form-input-check" onChange={this.handleChangeCheckbox}/>
                <label class="form-input-label">Срочное</label>
            </div>
        </div>
            <div class="col-3">
                <button type="button" name="button" onClick={this.onBtnClickHandler}>Добавить дело</button>
            </div>
        </div>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
  };

export {Add}