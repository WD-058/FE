//Task 4
// 1. Declare a function
//ES5
function greet() {
  console.log('Hello, World!');
}
// ES6 also arrow function
const greeting = () => {
  console.log('Hello, Class!');
};

// call a function
greet();
greeting();

//2. Declaring a function with parameter
function squa() {
  console.log('Square');
  return 2 * 2;
  console.log(num * num);
}

function square(num) {
  console.log('Square');
  return num * num;
  console.log(num * num);
}

// call the function with an argument

square(2)
square(3)
square(4)
let squareResult = square(2);
console.log(squareResult);

// 3.
const date = new Date();
const month = date.getMonth();
console.log(month)
const day = date.getDay();
console.log(day);

function getDayName(dayNumber){
    let dayName;
    switch(dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    };

    return dayName;
}

console.log(getDayName(day));


let resultDayExpression = getDayName(3);
console.log(resultDayExpression);