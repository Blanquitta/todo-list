import { useRef } from "react";

function TodoForm({ onAddTodo }) {
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    // onAddTodo(inputRef.current.value.);
    const todoTitle = inputRef.current.value.trim();
    if (!todoTitle) {
      return;
    }

    onAddTodo(todoTitle);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Todo </label>
      <input type="text" id="todotitle" ref={inputRef} />

      <button type="submit"> Add Todo </button>
    </form>
  );
}

export default TodoForm;
