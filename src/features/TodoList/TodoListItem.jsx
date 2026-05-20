
import { useState } from 'react';
import TextInputWithLabel from '../../../shared/TextInputWithLabel.jsx';
import validateTodo from "../../../utils/todoValidation.js";
export default function TodoListItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

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

          <span onClick={() => setIsEditing(true)}>
            {todo.title}
          </span>
        </form>
      )}
    </>
  );
}