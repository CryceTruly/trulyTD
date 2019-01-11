import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
class AddTodo extends Component {
 changed=(e)=>{
    
     
     this.setState({[e.target.name]:e.target.value});
 }
 state={
    title:''

}
  render() {
     
      return (
          <div>
              <form onSubmit={this.submited} style={{display:'flex'}}>
                  <input type="text" name="title" style={{flex:'10',padding:'5px'}} 
                   placeholder="Enter title" value={this.state.title} onChange={this.changed}/>
              <button className="btn" style={{flex:'1'}}>Submit</button>
              </form>
          </div>
      )
    
}


submited=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''})
}
}
AddTodo.prototypes={
    submited:PropTypes.func.isRequired,
    changed:PropTypes.func.isRequired
}



export default AddTodo;
