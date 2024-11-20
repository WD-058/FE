const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// // Task 1:
let counter = 0;
let numberOfAnimals = 0;

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  numberOfAnimals++;
  //   numberOfAnimals = i + 1
}
console.log(numberOfAnimals);

// for (let i = 10; i > 0; i--) {
//   // console.log(animals[i]);
//   // numberOfAnimals++;
//   //   numberOfAnimals = i + 1
// }

// //Task 2:
let index = 0;
let countMoreThan5 = 0;

while (index < animals.length) {
  if (animals[index].length >= 5) {
    numberOfAnimals++;
  }
  index++;
}

console.log(numberOfAnimals);

// //Task 3:
let countUntilM = 0;
let position = 0;

do {
  if (animals[position][0].toLowerCase() === 'm') {
    break;
  }
  countUntilM++;
  position++;
} while (position < animals.length);

console.log(countUntilM);

// let count = 0;

// let i = 0;

// do {
//   count++;
//   i++;
// } while (!animals[i].startsWith("m"));

// console.log(count);
