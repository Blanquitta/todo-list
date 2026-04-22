
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";


function TodoList() {
     const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},

]

 const count = []
    return (

      <>
      <ul>
       <h1> My Todo </h1>
        
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  )
     
 



}

export default TodoList;