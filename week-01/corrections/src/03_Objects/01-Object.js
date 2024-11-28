// Task 1

const book = {
  title: 'To kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  isRead: true,
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};
const book2 = {
  title: 'Harry Potter',
  author: 'JKR',
  pages: 200,
  isRead: true,
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};
const film = {
  title: 'Harry Potter',
  director: 'JKR',
  duration: 200,
  isWatch: true,
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};

function summary(
  placeholderTitle,
  placeholderAuthor,
  placeholderPages,
  placeholderisRead
) {
  // console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead? "Yes" : "No"}`)
  return `Title: ${placeholderTitle}, Author: ${placeholderAuthor}, Pages: ${placeholderPages}, Read: ${
    placeholderisRead ? 'Yes' : 'No'
  }`;
}
function summary({ title, author, pages, isRead }) {
  // console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead? "Yes" : "No"}`)
  return `Title: ${title}, Author: ${author}, Pages: ${pages}, Read: ${
    isRead ? 'Yes' : 'No'
  }`;
}

console.log(summary(book));
console.log(summary(book2));
console.log(summary(film));
// console.log(summary(book2.title, book2.author, book2.pages, book2.isRead))

// console.log(summary);

// console.log(summary());

console.log(book.summary());

// Task 2: Destructuring

// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

const [fruit1, , , fruit4] = fruits;
console.log(fruits[3]);
console.log(fruit4);

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
const {
  name,
  age,
  address: { city, zip },
} = person;
console.log(name, city, zip);

// Initial function
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(person);
