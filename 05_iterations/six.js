// For Each Loop

// const coding = ["js", "ruby", "java", "python", "cpp"]

// // For Each Doesnot return any thing
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);




const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => (num > 4))

// if we apply the  scopes then we have to return th value
// const newNums = myNums.filter((num) => { return num > 4 })

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);