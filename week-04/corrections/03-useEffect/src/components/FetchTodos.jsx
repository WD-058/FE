import { useEffect } from "react";

function FetchTodos({ todos, setTodos }) {
  useEffect(() => {
    // async function getAllTodos(){}
    const getTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("Response not ok");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div>
      <h2>FetchTodos</h2>
      <ul>
        {todos.slice(0, 10).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTodos;
