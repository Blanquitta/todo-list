function TodoListItem ( {todo, onCompleteTodo}) {

  return(

  <li>
    <li> {todo.title} </li> 
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onCompleteTodo(todo.id)}
      />
      {todo.title}
  </li>
);


}
export default TodoListItem;
