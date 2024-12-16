function Form({ setToDoes, toDoes, todo, setTodo }) {
  const handleChange = (e) => {
    setTodo({ ...todo, id: toDoes.length + 1, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoes([...toDoes, todo]);
    localStorage.setItem("toDoes", JSON.stringify([...toDoes, todo]));
    setTodo({ id: "", title: "" });
  };

  console.log(todo);
  console.log(toDoes);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task</label>
      <input
        onChange={handleChange}
        type="text"
        id="task"
        name="task"
        placeholder="enter task"
        value={todo.title}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
