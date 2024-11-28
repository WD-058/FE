const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// const stringNumbers = numbers.map((number) => 'Number: ' + number);
const stringNumbers = numbers.map((number) => `Number: ${number}`);
// console.log(stringNumbers);

// const numberObjects = numbers.map((number) => ({ original: number, squared: number ** 2 }));

const numberObjects = numbers.map((number) => {
  return { original: number, squared: number ** 2 };
});

console.log(numberObjects);
