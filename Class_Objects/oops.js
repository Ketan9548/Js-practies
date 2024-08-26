const details = {
    username : "kapil",
    age: 23,
    collage: "Galgotias University",

    getdetails: function(){
        console.log(`the username is: ${this.age}`);
    }
}
 
console.log(details.username)
details.getdetails();



/*
for practies only
let str = "Kapil";
str[0]= "k";
console.log(str);
let str = "Kapil";
str = "k" + str.slice(1);
console.log(str); // Output: kapil
*/
