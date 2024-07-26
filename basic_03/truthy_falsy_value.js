// falsy value
// false, 0, -0, BigINt 0n, "",  null, undefinde, NaN

// truthy value
// true, "0", 'false', " ", [], {}, function(){}


// let usertoken = []

// if (usertoken) {
//     console.log("valid token")
// }

// if (usertoken.length === 1) {
//     console.log("valid token")
// }
// else{
//     console.log("not a valid user")
// }


// const userdata = {}

// object.keys(USERDATA) is a converting in array

// if (Object.keys(userdata).length === 0) {
//     console.log("empty object")
// }


// nullish Coalescing Operator (??)

// const one = ()=>{
//     let a = "good"
//     return a;
// }

// let val;
// val = null ?? one()

// console.log(val)


// turnari operator

const game = 100

game < 80 ? console.log("good price"):console.log("not a good price")