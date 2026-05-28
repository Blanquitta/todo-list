z

// import validateTodo from "../../../utils/todoValidation.js";
// import { useState, useCallback, useMemo } from "react";

import TextInputWithLabel from "../../../shared/TextInputWithLabel.jsx";
import { useMemo } from "react";
import todoList from "./TodoList";
// import { useState } from "react";

export default function TodoList({ todoList, dataVersion }) {
  const filteredTodoList = useMemo(() => {
    console.log(`Recalculating filtered todos (v${dataVersion})`);
    return todoList.filter((todo) => !todo.isCompleted);
  }, [todoList, dataVersion]);
// new

function TodoList({
  todo,
  onCompleteTodo,
  onUpdateTodo,
}) 


  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
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
//   return (
//     <ul>
//       {filteredTodoList.map((todo) => (
//         <TodoListItem key={todo.id} todo={todo} />
//       ))}
//     </ul>
//   );
// }
// return ( 
//     <>
//       <TodoListItem
//         key={todo.id}
//         todo={todo}
//         onCompleteTodo={onCompleteTodo}
//         onUpdateTodo={onUpdateTodo}
//       />
//       {isEditing ? (
//         <TextInputWithLabel value={todo.title} />
//       ) : (
//         <form>
//           <input type="checkbox" />

//           <span onClick={() => setIsEditing(true)}>{todo.title}</span>
//         </form>
//       )}
//     </>
//   );
// }
