// This is the sigelton Oject 
// const tinderUser = new Object()


// this is Non sigelton
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.idLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "adi@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Aditya",
            lastname: "Ranjan"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "Aditya"
    }
]
// console.log(user)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('idLoggedIn'));


const cource = {
    courcename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// cource.courseInstructor

const { courseInstructor: instructor } = cource
// console.log(courseInstructor);
console.log(instructor);


 