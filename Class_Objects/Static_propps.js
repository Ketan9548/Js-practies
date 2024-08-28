class User {
    constructor(username){
        this.username = username;
    }
    LoginMe(){
        return `${this.username} Has been Login`
    }
    // not acces every one
    static NotEveryOne(){
        console.log(`this is not for everyone`)
    }
}

class Usernamp extends User{
    constructor(password,username){
        super(username)
        this.password = password;
    }

    Printval(){
        return `${this.username} password is ${this.password}`
    }
}

const kapil = new User("kapil_122")
const ketan = new Usernamp("ketan_123",83844);
// kapil.NotEveryOne()
// ketan.NotEveryOne()
console.log(ketan.LoginMe())
