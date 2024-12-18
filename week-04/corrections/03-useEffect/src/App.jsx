import "./App.css";
import { useState } from "react";
import FetchTodos from "./components/FetchTodos";
import Candle from "./components/Candle";

function App() {
  const [todos, setTodos] = useState([]);
  

  return (
    <>
      <h1>App</h1>
      {/* <FetchTodos todos={todos} setTodos={setTodos} /> */}
      <Candle />
    </>
  );
}

export default App;
