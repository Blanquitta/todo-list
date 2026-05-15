

export default TodoForm;
import { useState, useRef } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel.jsx";
import validateTodo from "../../utils/todoValidation.js";

const TodoForm = ({ onAddTodo }) => {
  const inputRef = useRef(null);
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!validateTodo(workingTodoTitle)) return;

    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>

      <TextInputWithLabel
        elementId="todoTitle"
        type="text"
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
        ref={inputRef}
      />

      <button
        type="submit"
        disabled={!validateTodo(workingTodoTitle)}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;