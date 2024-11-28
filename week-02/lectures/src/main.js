


console.log(document);
console.log(document.querySelector("h2"));
console.log(document.querySelector(".title"));
console.log(document.querySelector("#main_title"));
console.log(document.getElementById("item1"));

console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".nav_item"));
console.log(document.getElementsByClassName("nav_item"));

const h2 = document.querySelector("h2");
const toDoList = document.getElementById("list_of_to_does");
const listItems = document.querySelectorAll(".list_item");

// UPDATE ELEMENTS
// content
h2.innerHTML = "<i>My todo list</i>";
h2.innerText = "My todo list";
h2.textContent = "My todo list";

// styling
h2.classList.add("yellow");
console.log(h2);
h2.classList.remove("yellow");

// ADD ELEMENTS
//creating the item
const listItem = document.createElement("li");
console.log(listItem);
listItem.textContent = "Item 4";
listItem.classList.add("list_item");
console.log(listItem);
// Insert it to the html
toDoList.appendChild(listItem);

const createElement = (todo) => {
  const listItem = document.createElement("li");
  listItem.textContent = todo.title;
  listItem.classList.add("list_item");

  toDoList.appendChild(listItem);
};
//REMOVE ELEMENTS
toDoList.removeChild(listItem);

// FETCH DATA
console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.slice(0, 10));
    data.slice(0, 10).forEach((item) => createElement(item));
  })
  .catch((error) => console.error(error));

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => )

// HIGHER ORDER FUNCTIONS

//

function forEachLoop(func, array) {
  for (let i = 0; i < array.length; i++) {
    return func(array[i]);
  }
}

// function handleResponse(response) {
//   return response;
// }

// function thenthen(func, data) {
//   return func(data);
// }

// console.log(thenthen(handleResponse, { name: "John" }));
