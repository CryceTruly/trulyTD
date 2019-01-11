import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    getStyle=()=>{
return {
    backgroundColor:'#f4f4f4',
    borderBottom:'1px #ccc dotted',
                padding:'10px',
    textDecoration:this.props.todo.completed ?
   'line-through':'none' }

    }


  render() {
      const {id,title}=this.props.todo;
      return (
     <div style={this.getStyle()}>
        <p>
            <input type="checkbox" 
            onChange={this.props.markComplete.bind(this,id)}/>{' '}
        
        {title}</p>
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
         </div>
      )
  }
}


const btnStyle={
    backgroundColor:'#ff0000',
    cursor:'pointer',
    padding:'5px 9px'
}
TodoItem.prototypes={
    todo:PropTypes.object.isRequired
}




export default TodoItem;
