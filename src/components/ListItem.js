import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component{
    render(){
        const {text, time, isImportant} = this.props.data
        return(
            <div class="row align-items-center">
            <div class="col-1">
              <input class="form-check-input" type="checkbox" id="done"/>
            </div>
            <div class="col">
              <div class="card border-dark">
                <div class="card-body d-flex justify-content-between">
                  <div>
                    {isImportant && <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" />
                    </svg>}
                    {text}
                  </div>
                    <div>{time}</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    isImportant: PropTypes.bool.isRequired,
  })
}
export {ListItem}