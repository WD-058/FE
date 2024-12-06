// Selecting elements
const toDoList = document.getElementById('list_of_to_does');

// Function for creating and adding list elements
const createElement = (todo) => {
  const listItem = document.createElement('li');
  listItem.textContent = todo.title;
  listItem.classList.add('list_item');
  toDoList.appendChild(listItem);
};

// Fetching list of todos

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.slice(0, 10));
    // data.slice(0, 10).forEach((item) => createElement(item));

    // Storing fetch data into localStorage
    localStorage.setItem("todoList", JSON.stringify(data.slice(0, 10)))
  })
  .catch((error) => console.error(error));

//Retrieve todoList from localStorage
const todoList = JSON.parse(localStorage.getItem("todoList"));
console.log(todoList)

todoList.forEach((item) => createElement(item));





const name = 'Maria';

let age = 44;
console.log(age)
let isStudent = false;
console.log(isStudent)

const numArray = [1, 2, 3, 4];

const user = {
  firstName: 'Jorge',
  lastName: 'Serrano',
  age: 35,
  isStudent: true,
};

const todos = [
  {
    id: 1,
    title: 'Cooking',
  },
  {
    id: 2,
    title: 'Cleaning',
  },
  {
    id: 3,
    title: 'Running',
  },
  {
    id: 4,
    title: 'Doing homework',
  },
];

// Storing data
localStorage.setItem('name', name);
localStorage.setItem('age', age);
localStorage.setItem('isStudent', isStudent);
localStorage.setItem('numArray', numArray);
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('todos', JSON.stringify(todos));

// Update data
localStorage.setItem('name', "Jorge");

todos.push({ id: 5, title: "Shopping" });
localStorage.setItem('todos', JSON.stringify(todos));

// Getting data
console.log(localStorage.getItem('name'));
console.log(Number(localStorage.getItem('age')));
console.log(localStorage.getItem('isStudent'));
console.log(localStorage.getItem('numArray'));
console.log(JSON.parse(localStorage.getItem('user')));
console.log(JSON.parse(localStorage.getItem('todos')));

// Deleting One element
// localStorage.removeItem("name");
// localStorage.removeItem("age");

// Deleting all elements
// localStorage.clear();
