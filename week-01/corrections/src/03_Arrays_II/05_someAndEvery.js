const numbers = [4, 8, 15, 116, 23, 42];

const isGreater = numbers.some((number) => number > 20);
console.log(isGreater);

const isLessThan50 = numbers.every((number, index) => {
  const isLess = number < 50;
  if (!isLess) console.log(index, number);
  return isLess;
});

console.log(numbers.findIndex((number) => number > 50));

console.log(isLessThan50);

const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// const passedFalse = students.some(student => student.passed === false)
const passedFalse = students.some((student) => !student.passed);
console.log(passedFalse);

const studentsOlderThan18 = students.every((student) => student.age > 18);
console.log(studentsOlderThan18);

// const numbers = [4, 8, 15, 116, 23, 42];
console.log(numbers.slice(2, 5));
console.log(numbers);
console.log(numbers.splice(2, 3, 'Hello'));
console.log(numbers);
