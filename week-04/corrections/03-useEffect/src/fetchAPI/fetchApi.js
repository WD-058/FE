 // async function getAllTodos(){}
 const getTodos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };