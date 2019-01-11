import React, {
  Component
} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/layout';
import uuid from 'uuid';
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
      <div className='container'>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
      
      </div>
    );
  }


  addTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
      title,
      completed:false
    }
    return this.setState({todos:[...this.state.todos,newTodo]})
    
  }
}

export default App;