import Todo from './Todo'

const TodoList = ({todoArray, toggleCompleteTodo, deleteTodo, ...props})  => { 
    return ( 
        <>
        {todoArray.map( (todo,idx) => {
            return <Todo key={idx} id={idx} isComplete={todo.isComplete} text={todo.text} deleteTodo={deleteTodo} toggleCompleteTodo={toggleCompleteTodo}/>
            })
        }
        </>
     );
}

export default TodoList;