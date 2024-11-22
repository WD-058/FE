// Task 4
// Step 1: Initialize array
const arr = [10,22,33,44,55,66];

// Step 2: Iterate over the array with a for loop and log each item in the console
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// };

// Step 3: Iteritin through the array with a for...of loop
// for(const index of arr){
//     console.log(index)
// };

// Step 4: Initialize an array of objects
const students = [
    {
        name: "Alireza",
        age: 22
    },
    {
        name: "Paul",
        age: 23
    },
    {
        name: "Ilona",
        age: 24
    }
];

// Step 5: Iterate over the array of objects with a for loop

// for(let i = 0; i < students.length; i++){
//     console.log(`My name is ${students[i].name} and I'm ${students[i].age} years old.`);
//     console.log("My name is " + students[i].name + " and I'm " + students[i].age + " years old.");
// };

// Step 6: terate over the array of objects with a for...of loop
for(const student of students){
    console.log(`My name is ${student.name} and I'm ${student.age} years old.`);
    console.log("My name is " + student.name + " and I'm " + student.age + " years old.");
};