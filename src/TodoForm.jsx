


import {useRef} from 'react';

import { useState } from "react";

function TodoForm({ onAddTodo }) {
   const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    
    
    
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle("");
  };

 

  return ( 
  <form onSubmit={handleAddTodo}>
    {/* <label htmlFor ="todoTitle"> Todo </label> */}
     
    <input
    type="text"
    value={workingTodoTitle}
    onChange={(e) => setWorkingTodoTitle(e.target.value)}
     />
    <button disabled={!workingTodoTitle.trim()}>
    Add Todo
 </button>
</form>


  );
}

export default TodoForm;