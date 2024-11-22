// Task 1

// Step 1
const myArray = [1, 3, '4', true, { firstName: 'Maria', lastName: 'Blanco' }];

// Step 2
console.log(myArray);

// Step 3
// Manually
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[4].firstName);
// console.log(myArray[4].lastName);

// Loop
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 4
myArray[1] = 'Changed value';

console.log(myArray);
