const numbers = [1, 2, 3, 4, 5];

function printThing(thing) {
  console.log(thing);
}

numbers.forEach(printThing);
numbers.forEach((number) => console.log(number));

let sum = 0;
numbers.forEach((number) => (sum += number));
console.log(sum);

const squaredNumbers = [];
numbers.forEach(function (number) {
  const squared = number ** 2;
  squaredNumbers.push(squared);
});
console.log(squaredNumbers);
