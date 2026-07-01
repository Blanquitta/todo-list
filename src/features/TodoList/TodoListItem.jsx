import { useMemo } from "react";

export default function TodoList({ todoList, dataVersion, onCompleteTodo }) {
  const filteredTodoList = useMemo(() => {
    console.log(`Recalculating filtered todos (v${dataVersion})`);

    return {
      version: dataVersion,
      todos: todoList.filter((todo) => !todo.isCompleted),
    };
  }, [todoList, dataVersion]);

  return (
    <ul>
      {filteredTodoList.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}

          <button onClick={() => onCompleteTodo(todo.id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
}
