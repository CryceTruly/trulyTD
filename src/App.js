import React, {
  Component
} from 'react';
import './App.css';
import Todos from './components/Todos';

import Header from './components/layout/layout';
class App extends Component {

  state = {
    todos: [{
        title: 'take out trash',
        id: 1,
        completed: false
      },
      {
        title: 'take out trash2',
        id: 2, 
        completed: false
      },
      {
        title: 'take out trash3',
        id: 3,
        completed: true
      }
    ]
  }


  delTodo=(id)=>{
   this.setState(
     {todos:[...this.state.todos.filter(todo=>todo.id!==id)]}
     
     
     )


    
  }
  markComplete=(id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  })})
        }


  render() {
    
    
    return (
      <div className = "App" >
      <Header/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;