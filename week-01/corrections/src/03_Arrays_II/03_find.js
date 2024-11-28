const numbers = [10, 20, 30, 40, 50];

console.log(numbers.find((number) => number > 25));

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'charlie', age: 55 },
  { name: 'David', age: 40 },
];

console.log(people.find((guy) => guy.name === 'Charlie'));
