class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username:${this.username}`);
    }
    static createId() {
        return `123`
    }
}
const aditya = new User("Aditya")
console.log(aditya.createId());