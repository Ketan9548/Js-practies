const details = {
    username : "kapil",
    age: 23,
    collage: "Galgotias University",

    getdetails: function(){
        console.log(`the username is: ${this.age}`);
        // console.log(this)
    }
}
 
// console.log(details.username)
// details.getdetails();
// console.log(this)


function User(username, loginCount, IsloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.IsloggedIn = IsloggedIn;
    // return this;
}

const UserOne = new User('kapil',4,true);
const UserTwo = new User('ketan',9,false);
console.log(UserOne)
console.log(UserTwo)


/*
for practies only
let str = "Kapil";
str[0]= "k";
console.log(str);
let str = "Kapil";
str = "k" + str.slice(1);
console.log(str); // Output: kapil
*/
