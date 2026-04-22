import {useState} from 'react'; 
import TodoListItem from "./TodoListItem";

 
     const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]
function App () { 
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1> My Todos</h1>
      <TodoList/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
