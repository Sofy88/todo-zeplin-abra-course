import React from "react";
import './Todo.css';

const Todo = ({id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props}) => {
   
    //const checkTodoHandler = (event) => {

    
    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
   
    const toggleCompleteHandler = (event) => {
       toggleCompleteTodo(id);
    }
    
    return ( 
        <div className='to-do' >   
           <p className={isComplete ? "completed" : ""} >  
           <input type="checkbox" onClick={toggleCompleteHandler}/>{text} 
           <button className='deleteBtn' onClick={deleteTodoHandler}>X</button></p>
        </div>
    );
}
 
export default Todo;


