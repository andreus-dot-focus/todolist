import React from 'react'
import PropTypes from 'prop-types'
import '../styles/ListItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class ListItem extends React.Component{
  onBtnClick = e =>{
    e.preventDefault();
    }
    render(){
        const {text, time, isImportant} = this.props.data
        return(
          <div className="item">
          <input className="item__input" type="checkbox" name="" value="" />
          <div className="item__inner">
            {isImportant?
            <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-circle-fill"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>:
          <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-circle-fill"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
            }
            <div className="item__content">
          <div className="item__text">{text}</div>
          <div className="item__time">{time}</div>
          </div>
            <div className="cross">
              <button 
              className="item__button" 
              type="button" 
              name="button" 
              onClick={this.onBtnClick}>
              <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </div>
        )
    }
}

ListItem.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isImportant: PropTypes.bool.isRequired,
  })
};
export {ListItem}