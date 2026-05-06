
// // import './App.css'
import {useState} from 'react'; 
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

  function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoTitle) {
    const updatedTodos = todoList.map((todo) =>
    todo.id === id
      ? { ...todo, isCompleted: true }
      : todo
);
    const newTodo = {
      id: nextId,
      title: todoTitle,
      isCompleted: false,
    };

    setTodos(previous => [newTodo, ...previous]);
   
  }

 return (
    <div>
      <h1>My Todos</h1>

      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todos} />
    </div>
  );
} 

export default App;

