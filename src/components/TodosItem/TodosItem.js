import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getCurrentList } from '../../actions/CurrentListActions'
import {setCurrentTodo} from '../../actions/TodosActions'


class TodosItem extends React.Component{
    render(){
        const {text, isCurrent} = this.props;
        let btnClasses;
        isCurrent ? btnClasses="btn btn-block btn-light active" : btnClasses="btn btn-block btn-light";
        return(
            <div className="todos-item">
               <button className={btnClasses} onClick={this.onBtnClickHandler}>{text}</button>
            </div>
        )
    }

    onBtnClickHandler= e=>{
        this.props.getCurrentListAction(this.props.listId);
        this.props.setCurrentTodoAction(this.props.listId);
    }
}

TodosItem.propTypes = {
    listId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired, 
    isCurrent: PropTypes.bool.isRequired,
    getCurrentListAction: PropTypes.func.isRequired,
    setCurrentTodoAction: PropTypes.func.isRequired,     
}

const mapDispatchToProps = dispatch =>({
    getCurrentListAction: (listId)=>dispatch(getCurrentList(listId)),
    setCurrentTodoAction: (listId)=>dispatch(setCurrentTodo(listId))
})

export default connect(null, mapDispatchToProps)(TodosItem)