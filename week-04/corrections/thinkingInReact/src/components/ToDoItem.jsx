const ToDoItem = ({ todo, toggleTodo }) => {
  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.completed}
        className="mr-2"
      />
      {todo.text}
    </li>
  );
};

export default ToDoItem;
