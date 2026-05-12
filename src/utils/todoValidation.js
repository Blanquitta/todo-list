import { isValidTodoTitle } from '../utils/todoValidation';
import { useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

export default isValidTodoTitle;
function isValidTodoTitle(title) {
  return title.trim() !== '';
}
<button disabled={!isValidTodoTitle(workingTodoTitle)}>Add Todo</button>
export default function TodoListItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  function handleCancel() {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  }
  function TodoListItem({ todo }) {
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  function handleEdit(event) {
    setWorkingTitle(event.target.value);
  }

  return (
    <TextInputWithLabel
      value={workingTitle}
      onChange={handleEdit}
    />
  );
}

  return (
    <>
      {isEditing ? (
        <>
          <TextInputWithLabel value={todo.title} />

          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <form>
          <input type="checkbox" />

          <span onClick={() => setIsEditing(true)}>
            {todo.title}
          </span>
        </form>
      )}
    </>
  );
}


