import React, {
  Component
} from 'react';
import './App.css';
import Todos from './components/Todos';
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
      <h1> App </h1> 
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;