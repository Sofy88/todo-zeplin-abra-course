import { useState } from 'react'

const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({ text : todoValue, isComplete: false})
    }
    return (  
        <>
        <input className='inputForm' type="text" onChange={(event) => setTodoValue(event.target.value)} placeholder='Write a new todo...'></input>
        <button className='add-button' onClick={addNewTodoHandler}>ADD</button>
        </>
    )
}

export default TodoForm;