// sigelton

// object literals


const mySym = Symbol("key1")

const jsUser = {
    name: "Aditya",
    "full name": "Aditya Ranjan",
    // To implement Symbol we have to use square bracket
    [mySym]: "myKey1",
    age: 22,
    location: "Patna",
    email: "aditya@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday "]
}

// console.log(jsUser)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


// console.log(typeof jsUser[mySym])


// Object.freeze(jsUser)
// jsUser.email="Aditya Ranjan"
// console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello Js User");
    return "Hello";
}
jsUser.greetingTwo = function () {
    console.log(`Hello Js user', ${this.name}`)
}
// console.time()
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())