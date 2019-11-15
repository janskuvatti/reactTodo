import React, {useState} from 'react';
import './App.css';
import Todolist from './components/todo';

function App() {
  
  //TODO: määritä statet
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  //TODO: Lisää tehtävä listaan
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged=  ( event, id) => {
    setTodo({...todo, [event.target.name]: event.target.value });
  
  }
  //TODO: poistaa tehtävän listalta
  const deleteTodo = (index) => {
      console.log("deleted item from the list");
      const newTodo = todos.filter((todo, i) =>i !== index)
      setTodos(newTodo);

  }
                 
  return (
    <div className="App">
      <header className="App-header">
       <h1>ToDo List</h1>
      </header>  
      <h4>Add ToDo:</h4>
      
      <form onSubmit={addTodo}>
      <label  >Date</label> 
       <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
       <label >Description</label> 

        <input type="text" name="desc" onChange={inputChanged} value={todo.desc} placeholder="description"/>

        <input type="submit" value="Add"/>
      </form>
      <Todolist todos={todos} deleteTodo={deleteTodo} />  
    </div>
  );
  
};
  
    
    
                    


export default App;
