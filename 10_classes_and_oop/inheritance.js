class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`UserName is ${this.username}`)
    }

}


class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCource() {
        console.log((`A new cource was added by ${this.username}`));
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCource()

const tea = new User("username")
console.log(chai instanceof User);
console.log(chai instanceof Teacher);
console.log(User instanceof Teacher);
