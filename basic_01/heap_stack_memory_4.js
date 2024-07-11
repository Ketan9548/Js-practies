// example of heap "refrence of value"
let shopcart1 = "321"
let shopcart2;

shopcart2 = shopcart1;

shopcart2 = "123";
// console.log(shopcart1)
// console.log(shopcart2)


// example of stack "original value"

let user1 = {
    name : "kapil",
    email : "ketan@gamil.com"
}

let user2 = {}
user2 = user1;

user2.name = "ketan";

console.log(user1.name)
console.log(user2.name)