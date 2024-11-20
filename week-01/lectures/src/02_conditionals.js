const temperature = "18";

// operators for conditions
// && ->  and 
// || =>  or 
// ! => not  - !=   !==
// == ===

if("18" != 18) {
    console.log("Not 18")
}

if("18" !== 18) {
    console.log("Not 18")
}

if (temperature < 15) {
  console.log("It's cold, wear a coat");
} else if (temperature <= 25) {
  console.log('No nead to wear a coat.');
} else {
  console.log("It's warm, just wear a T-shirt");
}