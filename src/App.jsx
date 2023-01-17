import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/todoItem/todoItem";

const initialTodos = [
  {
    id: 1,
    name: "Купить продукты",
    date: new Date(),
    checked: false
  },
  {
    id: 2,
    name: "Заправить автомобиль (Lada Granta - чёрного цвета 21 века)",
    date: new Date(),
    checked: false
  }
];

const App = () => {

  // Состоянии (данные) задач
  const [todos, setTodos] = useState(initialTodos);
  
    

  

  

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