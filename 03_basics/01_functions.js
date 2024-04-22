
// function sayMyName (){
//     console.log('A');
//     console.log('D');
//     console.log('I');
//     console.log('T');
//     console.log('Y');
//     console.log('A');

// }
// sayMyName()


// function addTwoNumber(number1, number2) {
//     // console.log(number1 + number2);
//     return number1+number2
// }

// const result = addTwoNumber(1, "3")

// console.log(result);

// ...num1 this is called rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))