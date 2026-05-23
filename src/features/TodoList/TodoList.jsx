

import { useState} from 'react';
import TodoListItem from "./TodoListItem.jsx";

export default TodoList;

export default function TodoList({
  todoList,
  onCompleteTodo,
  onUpdateTodo,
}) {
  if (todoList.length === 0) {
    return <p>Add todo above to get started</p>;
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}