"use strict";
// union type
let user = "hello";
user = 123;
// user = true // this is wrong
console.log(user);
// inference means making types automatic //implicitly
let id = 12344;
id = 443234;
let car = {
    cName: "mehran",
    model: 2000,
    average: (fuel, km) => {
        console.log(fuel / km);
    }
};
car.average(20, 500);
car.variant = 2004;
let dog = {
    limbs: 4,
    isBark: true
};
