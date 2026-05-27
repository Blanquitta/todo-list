function TodoListItem({ todo, onCompleteTodo }) {
  <li> {todo.title} </li>;
  return (
    <li>
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
