function good(num) {
    return num * 4;
}

good.power = 6;

// console.log(good(7));
// console.log(good.power);
// console.log(good.prototype);


function Createusername(username, score) {
    this.username = username;
    this.score = score;
}

Createusername.prototype.len = function () {
    let counter = 0;
    for (let i = 0; i < this.username.length; i++) {
        counter++;
    }
    return counter;
}

Createusername.prototype.scroreval = function () {
    // return this.score+1;
    return ++this.score;
}

let user1 = new Createusername("good", 99);
let user = new Createusername("Kapil", 100);
console.log(user.len());
console.log(user1.scroreval());


/* functionaly in 'new' Keyword

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
