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


const userdata = {}

// object.keys(USERDATA) is a converting in array

if (Object.keys(userdata).length === 0) {
    console.log("empty object")
}