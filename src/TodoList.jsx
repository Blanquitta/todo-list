
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";


function TodoList({todoList}) {
     

 const count = []
    return (

      <>
      <ul>
       
        
        {todoList.map((todo )=>(<TodoListItem key={todo.id} todo={todo} /> ))};
      </ul>
    </>
  )
     
 



}

export default TodoList;