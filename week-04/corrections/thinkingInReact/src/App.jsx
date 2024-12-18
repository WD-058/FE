import { useState } from "react";
import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const toggleTodo = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        console.log(todo.id, id);
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  // const toggleTodo = id => {
  //   setTodos(prevTodos =>
  //     prevTodos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       }
  //       return todo;
  //     })
  //   );
  // };
  console.log(todos)
  return (
    <div className="container mx-auto p-4">
      <AddToDo todos={todos} setTodos={setTodos} />
      <FilterComponent filter={filter} setFilter={setFilter} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
export default App;
