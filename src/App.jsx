
// // import './App.css'
import {useState} from 'react'; 
import TodoForm from './TodoForm.jsx';


  function App() {
  const [todos, setTodos] = useState([]);

  function  completeTodo(id) {
  setTodoList((prev) =>
    prev.map((todo) =>
    
    
    todo.id === id
      ? { ...todo, isCompleted: true }
      : todo
)
);
}
function addTodo(title) {
    const newTodo = {
      id: Date.now (),
      title,
      isCompleted: false,
    };

    setTodos(previous => [newTodo, ...previous]);
   
  }

 return (
    <div>
      <h1>My Todos</h1>

      <TodoForm onAddTodo={addTodo} />
      
    </div>
  );
} 
  
export default App;

