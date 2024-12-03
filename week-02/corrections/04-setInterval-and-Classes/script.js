// setInterval

let counter = 1;
// Promise.then syntax
const interval = setInterval(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then((response) => response.json())
    .then((data) => {
      counter++;
      console.log(`${data.id} ${data.name}`);

      if (counter > 10) {
        clearInterval(interval);
      }
    });
}, 1000);

// async/await syntax
const interval2 = setInterval(async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const data = await res.json();
  console.log(`${data.id} ${data.name}`);
  counter++;
  if (counter > 10) {
    clearInterval(interval2);
  }
}, 1000);

// setTimeout
const msgContainer = document.getElementById('message-container');

setTimeout(() => {
  const html = `<div class="bg-teal-300 text-slate-800" >Special Offer: Get <span class="text-red-700">20%</span> off your next purchase!</div>`;

  msgContainer.insertAdjacentHTML('afterbegin', html);
}, 3000);

// Objects III
const myBook = {
  title: 'Lord of the Rings',
  author: 'J.R.R.Tolkien',
  pages: 1234,
  isRead: true,
};

// Old style constructor function
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.summary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Time to read: ${this.pages * 3}min, Still to read: ${!this
    .isRead}`;
};

const hp = new Book("Harry Potter and the Philosopher's Stone", 'J.K.Rowling', 300, true);

// console.log(hp);
console.log(hp.summary());

// ES6 Class syntax
class LibaryItem {
  #title;

  constructor(title, author) {
    this.#title = title;
    this.author = author;
    this.date = new Date();
  }

  get title() {
    // some checks
    return this.#title;
  }

  set title(value) {
    if (typeof value !== 'string') throw new TypeError('Title must be a string');
    this.#title = value;
  }

  summary() {
    return `${this.#title}, written by ${this.author}`;
  }
}

const hp1 = new LibaryItem("Harry Potter and the Philosopher's Stone", 'J.K.Rowling');

// hp.author = 1234345

console.log(hp1.summary());
hp1.title = 'Some other title';
console.log(hp1.title);

// Subclass inheriting from base class
class BoardGame extends LibaryItem {
  constructor(title, author, genre) {
    // super creates the base class instance first
    // needs to be done as first
    super(title, author);
    // new things in this sub class
    this.genre = genre;
  }

  // overriding a base class method, doing something different
  summary() {
    return `${this.title}, a ${this.genre} game, created by ${this.author}`;
  }
}
