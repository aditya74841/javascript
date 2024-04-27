// reduce Method


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, cuurval) => {
//     console.log(`${acc}  ${cuurval}`);

//     return acc + cuurval
// }, 0)


const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)


console.log(myTotal);