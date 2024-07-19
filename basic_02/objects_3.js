// Singleton
// Object.create(); this is make using constructor


// symbol declaration
const mysym = Symbol("Working")
// Objects Letor


// object litrals
const JsUser = {
    name:"kapil",
    number:"23122",
    mysym:"worded",
    location:"kapil@gmail.com",
    islogin:false,
    lastLogin:[
        "Sunday", "Monday"
    ]
}


console.log(JsUser[mysym])