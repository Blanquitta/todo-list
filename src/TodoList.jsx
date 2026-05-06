
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
const filteredTodoList = todoList.filter(
  (todo) => !todo.isCompleted
);
return (
  filteredTodoList.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
);
}
export default TodoList;