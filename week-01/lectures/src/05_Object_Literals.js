const name = "Maria";

const person = {
    firstName: "Maria",
    lastName: "Blanco",
    age: 30,
    hobbys: ["Cooking", "Watercolors"],
    address: {
        street: "Av/Habana ",
        Number: "4",
        PLZ: "13088",
        city: "Lugo"
    },
    pets: [
        {
            petName: "Tom",
            patAge: 4,
            breed: "European common cat",
            hobbys: ["sleeping", "eating"],
            isSick: false,
        },
        {
            petName: "Bolita",
            patAge: 3,
            breed: "European common cat",
            hobbys: ["sleeping", "hiding under the couch"]
        }
    ]
}

// console.log(person);
// console.log(person.firstName);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.hobbys);
// console.log(person.hobbys[1]);
// console.log(person.hobbys.length);
// console.log(person.pets);
// console.log(person.pets[0]);
// console.log(person.pets[0].petName);
// console.log(person.pets[0].hobbys);
// console.log(person.pets[0].hobbys[0]);

person.friends = ["Ammy", "Lorena", "Daniel"];
person.firstName = "Blanca";

console.log(person);

