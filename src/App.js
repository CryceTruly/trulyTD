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
import axios from 'axios';
class App extends Component {

  state = {
    todos: [
    ]
  }


  delTodo=(id)=>{

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(data=>{
      console.log(data);
      
      this.setState(
        {todos:[...this.state.todos.filter(todo=>todo.id!==id)]}
        
        
        )
    })
  


    
  }
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>{
    console.log(res);
    this.setState({todos:res.data});
  })
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
   axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>{
    return this.setState({todos:[...this.state.todos,res.data]})
   })





    
  }
}

export default App;