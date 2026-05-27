import { useState } from "react";
import TextInputWithLabel from "../../../shared/TextInputWithLabel.jsx";
import validateTodo from "../../../utils/todoValidation.js";
import { useState, useCallback, useMemo } from "react";

export default function TodoListItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
// new
  export default function TodoList({
  todoList,
  dataVersion,
}) {
  const filteredTodoList = useMemo(() => {
  console.log(`Recalculating filtered todos (v${dataVersion})`);
  {
  filteredTodoList.todos.map((todo) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
    />
  ));
}

 
// new
  return {
    version: dataVersion,
    todos: todoList.filter((todo) => !todo.isCompleted),
  };
}, [todoList, dataVersion]);
  return {
    version: dataVersion,
    todos: todoList.filter((todo) => !todo.isCompleted),
  };
}, [todoList, dataVersion]);

  return (
    <>
      <TodoListItem
        key={todo.id}
        todo={todo}
        onCompleteTodo={onCompleteTodo}
        onUpdateTodo={onUpdateTodo}
      />
      {isEditing ? (
        <TextInputWithLabel value={todo.title} />
      ) : (
        <form>
          <input type="checkbox" />

          <span onClick={() => setIsEditing(true)}>{todo.title}</span>
        </form>
      )}
    </>
  );
}
