class User {
    constructor(username){
        this.username = username;
    }
    LoginMe(){
        return `${this.username} Has been Login`
    }
}

// const me = new User("kapil");
// console.log(me.LoginMe())

// inheritance
class Usernamp extends User{
    constructor(password,username){
        super(username)
        this.password = password;
    }

    Printval(){
        return `${this.username} password is ${this.password}`
    }
}

const val1 = new Usernamp(1234,"kapil");
const val2 = new User("lumon")
console.log(val1.Printval())
console.log(val2.LoginMe())

console.log(val2 instanceof User)

