// # Primitive DataType (Call by value)
// 7 types : String,Number, Boolean, null, undefined, Symbol, BigInt


// # NonPrimitive DataType (Call by refrence)
//    Array, Objects, Functions


// JavaScript is a dynamically typed language


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bihNumber = 5446464641465464



const randomName = ["heros", "abc", "asdk"]  // array

const myObj = {
    name: "Aditya",
    age: 12
}

console.log(typeof myObj) // object

const myFunction = function () {
    console.log("Hello World")
}


console.log(typeof myFunction) //  Function

//  +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


let myname = "Aditya"
let anothername = "Ranjan"

console.log(anothername);
console.log(myname);


let userOne = {
    email: "aditya@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ranjan@gmail.com"


console.log(userOne.email);
console.log(userTwo.email)