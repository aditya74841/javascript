const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    //NOTE: In Arrow function thre is no this keyword
    getUserDetails: function () {
        // console.log("Gout user details from database");
        // console.log(`Usernmae ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date()

// console.log(date);

// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// // new Keyword always gives the new instances
// // it create a new Object 

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("Aditya", 11, false)

// console.log(userOne);
// console.log(userTwo);

