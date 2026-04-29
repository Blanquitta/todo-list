
// // import './App.css'
import {useState} from 'react'; 
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

  
// //  const todoList = [
// //     {id: 1, title: "review resources"},
// //     {id: 2, title: "take notes"},
// //     {id: 3, title: "code out app"},





function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoTitle) {
    const newTodo = {
      id: Date.now(),
      title: todoTitle
    };

    setTodos(previous => [newTodo, ...previous]);
  }

 return (
    <div>
      <h1>My Todos</h1>

      <TodoForm onAddtodo={addTodo} />
      <TodoList todoList={todos} />
    </div>
  );
} 

export default App;

