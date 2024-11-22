// Task 1
// Steps 1: Iniciating the array

const arr = [1, 2, 3, 4, 5];

// Step 2: Adding elements at the end of the array

arr.push(10);
arr.push(11);

// Printing the array
console.log(arr);

// Step 3: Remove the last item of the array

arr.pop();

// Printing the array
console.log(arr);

// Step 4: Remove the first element of the array
arr.shift();

// Printing the array
console.log(arr);

// Step 5: Inserting a new item in the first position of the array
arr.unshift(100);

// Printing the array
console.log(arr);

// Task 2:
// Step 1: Slice the array between index 1 and 3
const slicing = arr.slice(1, 4);
console.log(slicing);

// Step 2: Slicing from index 3 to the end
const slicingToEnd = arr.slice(3);
console.log(slicingToEnd);

// Step 3: Slice the last 4 elements
const slicingLast4 = arr.slice(-4);
console.log(slicingLast4);

// Task 3:
const array = ['apple', 'banana', 'cherry', 'date'];

// Step 1: Join the items in one string
const str = array.join();
console.log(str);

const str2 = array.join(" ")
console.log(str2);

const str3 = array.join(", ")
console.log(str3);

