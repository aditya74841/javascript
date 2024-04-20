const score = 400

console.log(score)
console.log(typeof score)


const balance = new Number(100);
console.log(balance);
console.log(typeof balance) //object

console.log(balance.toFixed(2))


let otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++ Maths +++++++++++++++



// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.floor(4.9)); // 4

// console.log(Math.pow(2,12)); // 4096
// console.log(Math.min(2,12));  // 2
// console.log(Math.max(2,12));  // 12

console.log(Math.random());  // 0.8928606676820408  ! This will give value Between 0 and 1
console.log((Math.random() * 10) + 1);

console.log(Math.ceil(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




