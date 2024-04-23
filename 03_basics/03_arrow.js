const user = {
    username: "aditya",
    price: 999,
    welcomeMessage: function () {
        //This is use to take current context
        console.log(`${this.username} welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);



// function chai() {

//     let username = "aditya"
//     console.log(this.global);
//     // console.log(this.username);  //undefined (Because this works Only in Object)

//     console.log(this.global);
// }

// chai()

// const chai = () => {
//     let username = "Aditya"
//     console.log(this)
// }

// chai()


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({ username: "aditya" })

// console.log((addTwo(3, 4)));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()

