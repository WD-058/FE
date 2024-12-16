
function Todo({ toDo }) {
  return (
    <div>
      <input type="checkbox" />
      <span>{toDo.title}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
