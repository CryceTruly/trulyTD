import React, {
  Component
} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/layout';
import uuid from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './components/pages/About';
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
      <Router>  
      <div className = "App" >
       <div className='container'>
      <Header/>
      <Route exact path='/' render={props=>(
        <React.Fragment>

 <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
       </React.Fragment>
      )
      }

      />

      <Route path='/about' component={About}></Route>
     
     
      </div>
      
      </div>
      
      </Router>
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