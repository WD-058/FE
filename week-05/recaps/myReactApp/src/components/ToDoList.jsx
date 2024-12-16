import Todo from "./Todo";

function ToDoList({ toDoes }) {
  return (
    <div>
      <h2>My list</h2>
      <ul>
        {toDoes.map((toDo) => (
          <Todo toDo={toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
