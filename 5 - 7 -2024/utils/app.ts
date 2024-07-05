// importing one variable
import {sum as sumOf } from "./sum/sum.js"
let sum = 123;
let total = sumOf(2,2);
console.log(total,sum);




// importing full file
import * as allFiles from "./sum/sum.js"
console.log(allFiles.car);


// importing default
import Sum from "./sum/sum.js"
console.log(Sum);



// class

class Car{
    model;
    carName;
    constructor(name :string,model:string){
        this.model= model
        this.carName = name
    }
}
