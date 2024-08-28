// After ES6

// class User {
//     constructor(username,email,password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrpytionpassword(){
//         return `3421${this.password}213`;
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const sumit = new User("sumit_123","sumit@gmail.com",1233);
// console.log(sumit.encrpytionpassword())
// console.log(sumit.changeusername())



// Before class 
// Use Function

function User(username, email, password) {
    this.email = email;
    this.username = username;
    this.password = password;
}

User.prototype.encrpytionpassword = function(){
    return `3421${this.password}213`;
}

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`;
}

const harsh = new User("Harsh@123", "harsh@gmail.com", 98383);
console.log(harsh.changeusername());
console.log(harsh.encrpytionpassword());