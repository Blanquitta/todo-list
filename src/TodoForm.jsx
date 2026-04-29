
// function TodoForm() {
//   return ( <form>
//       <label htmlFor="todoTitle">Todo</label>
//       <input type="text" id="todoTitle" />
//       <button type="submit" disabled>Add Todo</button>
//     </form>
//   );
// }
import {useRef} from 'react';
// import TodoForm from './TodoForm.jsx';


function TodoForm({ onAddTodo }) {
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();

  return (
  <form>
    <label htmlFor ="todoTitle"> Todo </label>
    <button type="submit" disabledS> Add Todo </button>
  </form>
);



  const todoTitle = event.target.todoTitle.value.trim();
    if (todoTitle && todoTitle !== "") {
      onAddTodo(todoTitle);
      event.target.reset();
      inputRef.current.focus();
    }
  };
      return (
  <form on onSubmit={handleAddTodo}>
    <label htmlFor="todoTitle">Todo</label>
    <input
      ref={inputRef}
      type="text"
      id="todoTitle"
      name="todoTitle"
      placeholder={'Todo text'}
      required
    />
    <button type="submit" onClick={handleAddTodo}>
      Add Todo
    </button>
  </form>
  
  

    
  );
}

export default TodoForm;