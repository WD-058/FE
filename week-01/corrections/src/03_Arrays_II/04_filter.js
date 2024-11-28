const numbers = [5, 10, 15, 20, 25, 30];

const numbersGreaterThan15 = numbers.filter((num) => num > 15);
console.log(numbersGreaterThan15);

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log(studentsAbove80);
