// union type
let user: string|number= "hello";
user = 123;
// user = true // this is wrong
console.log(user);
// inference means making types automatic //implicitly
let id = 12344;
id = 443234;

// adding types in object
// and optional by adding "?"
// adding type in function

type Car = {
    cName : string, 
    model : number,
    variant? :number,
    average :(fuel:number,km:number)=>void
}
let car :Car ={
    cName: "mehran",
    model : 2000,
    average : (fuel,km) => {
        console.log(fuel/km);
    } 
}
car.average(20 ,500)

car.variant = 2004;



// interface can be extended
// no need of "="
interface Animal {
    limbs : number,   
}
interface Dog extends Animal{
    isBark : boolean
}
let dog: Dog = {
    limbs : 4,
    isBark: true
}

