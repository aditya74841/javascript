// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, crypography, network

//     setTimeout(function () {
//         console.log("Async task is Complete");
//         resolve()
//     }, 1000)

// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })
// console.log(promiseOne);



// Third Promise

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async Task 2");
//         // resolve()
//         // reject()


//     }, 1000)
// }).then(() => {
//     console.log("Task 2 Promise consumed");
// }).catch(() => {
//     console.log("Task 2 Promise rejected");
// }).finally(() => {
//     console.log("Task 2 Promise Runs finally");
// })


// Promise Three Example

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         // we can send data through relove also
//         resolve({
//             username: "Aditya", email:
//                 "aditya@gmail.com"
//         })
//     }, 1000)
// })


// promiseThree.then((user) => {
//     console.log(user);
// })


// Promise Four Example


// const promiseFour = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "Aditya", password: 123
//             })
//         }
//         else {
//             reject("Error:Something Went Wrong")
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username

//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Work Done Either it is resolve or reject");
//     })



// Promise Five Example

// const promiseFive = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ username: "javscript", password: 123 })
//         } else {
//             reject('Error: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }
// }




// consumePromiseFive() 





// const getAllUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers() 




fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })