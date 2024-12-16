import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { toDoes } from "./data/data";

function App() {
  const [toDoes, setToDoes] = useState(
    JSON.parse(localStorage.getItem("toDoes")) || []
  );
  const [todo, setTodo] = useState({ id: "", title: "" });

  return (
    <>
      <h1>My To-Do-List</h1>
      <Form
        setToDoes={setToDoes}
        todo={todo}
        setTodo={setTodo}
        toDoes={toDoes}
      />
      <ToDoList toDoes={toDoes} />
    </>
  );
}

export default App;
