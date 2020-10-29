import React from 'react'
import PropTypes from 'prop-types'


class TodosItem extends React.Component{
    render(){
        const {text} = this.props;
        return(
            <div className="todos-item">
                <p>{text}</p>
            </div>
        )
    }
}

TodosItem.propTypes = {
    listId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,      
}


export {TodosItem}