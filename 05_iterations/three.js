// for of

const arr = [1, 2, 3, 4, 5, 6]

// for (const num of arr) {
//     console.log(`number of arr is ${num}`)
// }


// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each Char of Greeting is ${greet}`);
// }





// Maps

const map = new Map()
map.set('IN', "India")
map.set('USE', "Unites states of America")
map.set('Fr', "France")

// console.log(map);

// for (const key of map) {
//     console.log(key)
// }



// To destructure the key and value


for (const [key, value] of map) {
    console.log(key)
    console.log(value)
}

const myObject = {
    "game1": "NFS",
    "game2": "Spideman"
}


// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }