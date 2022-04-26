import './App.css';
import { useState } from 'react';
import TodoList from './components/./TodoList';
import TodoForm from './components/TodoForm';
import memo from './image/memo.png'
import abra from './image/abra.png'

function App() {
  const [todoArray, setTodoArray] = useState([{}]);

  const addNewTodo = (todo) => {
    const newTodo = [...todoArray];
    newTodo.push(todo);
    setTodoArray(newTodo);
  }

  const deleteTodo = (id) => {
    const newTodo = [...todoArray];
    newTodo.splice(id, 1); 
    setTodoArray(newTodo);
  } 

 /* const checkTodoHandler =(id) => {
    const newTodo = [...todoArray];
    newTodo[id].isComplete =
  }

  */

  const toggleComplete = (id) => {
    const newTodo = [...todoArray];
    newTodo[id].isComplete = !newTodo[id].isComplete;
    setTodoArray(newTodo);
  }
 
  return (
    <div className='TodoApp'>
      <div className='header'>
        <p className='to-do-list'>To Do List</p>
        <img className='memo' src={memo} alt=''></img>
      </div>
      <div className='body'>
        <h1 className='My-todos'>My todos:</h1>
         <TodoList todoArray={todoArray} deleteTodo={deleteTodo} toggleCompleteTodo={toggleComplete}/>
         <TodoForm addNewTodo={addNewTodo}/>
      </div>
      <div className='footer'>
        <img className='abra' src={abra} alt=''></img>
      </div>
    </div>
  );

}

export default App;


//<Todo isComlplete