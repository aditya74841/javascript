// var c = 300 //Golbal Scope
// let a = 100;
// if (true) {
//     let a = 10 //block Scope
//     const b = 20
//     var c = 30
// }
// console.log(a);



// console.log(c);
// console.log(b);


function One() {
    const username = "Aditya"
    function Two() {
        const website = "Ranjan"
        console.log(username);
    }
    // console.log(website);
    // Two()
}
One()

if (true) {
    const username = "aditya"

    if (username === "aditya") {
        const website = " Ranjan"
        console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ Intresting +++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1;
}

// This is Called Hoisting because below will give error
addTwo(5)
const addTwo = function (num) {
    return num + 2
}