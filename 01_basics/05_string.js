const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + "Ranjan")

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Aditya-Ranjan')

console.log(gameName[0]) // A
console.log(gameName.__proto__) // {object}

console.log(gameName.length); // 13
console.log(gameName.toUpperCase()); // ADITYA RANJAN
console.log(gameName.charAt(2));   // i
console.log(gameName.indexOf('t')); // 3

console.log(gameName.charAt(2));


const subString = gameName.substring(0, 4)
console.log(subString);

const sliceString = gameName.slice(-13, 4);
console.log(sliceString)


const newStringOne = "       hitesh     "

console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())

const url = "https://aditya.com/aditya%20ranjan"

console.log(url.replace('%20','-'))

console.log(url.includes('shubham'))



