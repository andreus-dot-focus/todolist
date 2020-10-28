import React from 'react'
import PropTypes from 'prop-types'


class TodosItem extends React.Component{
    render(){
        const {text} = this.props.data;
        return(
            <div className="todos-item">
                <p>{text}</p>
            </div>
        )
    }
}

TodosItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
      })
}


export {TodosItem}