function Superuser(username){
    this.username = username;

}

// Only Refrence is call not value is hold for Setvalue function
// function Setvalue(username,email,password){
//     Superuser(username);
//     this.email = email;
//     this.password = password;
// }

function Setvalue(username,email,password){
    Superuser.call(this,username);
    this.email = email;
    this.password = password;
}

let newuser = new Setvalue("kapil","kapil@gmail.com",123);
console.log(newuser)