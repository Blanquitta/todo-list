// function TodoListItem ( {todo, onCompleteTodo}) {

//   return(

//   <li>
//     <li> {todo.title} </li> 
//       <input
//         type="checkbox"
//         checked={todo.isCompleted}
//         onChange={() => onCompleteTodo(todo.id)}
//       />
//       {todo.title}
//   </li>
// );


// }

import { useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";

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