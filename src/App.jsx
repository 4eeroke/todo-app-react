import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/todoItem/todoItem";

const initialTodos = []

const App = () => {

  // Состоянии (данные) задач
  const [todos, setTodos] = useState(initialTodos);
  

  // Получение данных из localStorage
  useEffect (() => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])


  return (
    <div className="layout">
      <TodoHeader setTodos = {setTodos}/>

      {/* Все задачи */}
      <div>
        {/* Одна задача */}
        {todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo}/>)}
      </div>
    </div>
  );
};

export default App;