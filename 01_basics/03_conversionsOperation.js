let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)


// <  0 > (less than and greater than all number will be true and Only Zero will be false)
// "" => false
// "Aditya" => true