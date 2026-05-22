
import './App.css'

import { useState } from "react";
import TodoForm from "./features/TodoForm.jsx";
// import TodoList from "./features/Todos/TodoList/todoList.js";
import Logon from "./features/Logon";
import Header from "./Header";
import TodosPage from "./features/Todos/TodosPage";

function App() {
  // Define state variables for email and token
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  return (
    <div>
      {/* Always render the Header */}
      <Header />

      {/* Conditional rendering based on the token */}
      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
    </div>
  );
}

export default App;

// const [token, setToken] = useState('');


//   return (
//     <div>
//       <Header
//         token={token}
//         onSetToken={setToken}
//         onSetEmail={setEmail}
//       />

//       {token ? (
//         <TodosPage token={token} />
//       ) : (
//         <Logon
//           onSetEmail={setEmail}
//           onSetToken={setToken}
//         />
//       )}
//     </div>
//   );



//  function App() {
//   return (
//     <>
//       <Header />
//       <TodosPage />
//     </>


//   );
// }
// function updateTodo(editedTodo) {
//   const updatedTodos = todoList.map((todo) =>
//     todo.id === editedTodo.id
//       ? { ...editedTodo }
//       : todo
//   );

//   setTodoList(updatedTodos);

//   function App() {
//   const [todos, setTodos] = useState([]);


// function addTodo(title) {
//     const newTodo = {
//       id: Date.now(),
      
//       title,
//       isCompleted: false,
//     };

//     setTodos(previous => [newTodo, ...previous]);
   
//   }
// function  completeTodo(id) {
//   const updatedTodos = todos.map((todo)=>
//    todo.id === id
//       ? { ...todo, isCompleted: true }
//       : todo
//   )
//       setTodos(updatedTodos)

// }
// }
//  return (
//     <>
//       <h1>My Todos</h1>

//       <TodoForm onAddTodo={addTodo} />;'
      
      
//       <TodoList todoList= {todos}
//       onCompleteTodo={completeTodo}
      
      
//     />
//     </>
//   );
// } 
  
// export default  TodoList;

