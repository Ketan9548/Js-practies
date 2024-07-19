const foodapp = {}

foodapp.name = "fastfood"
foodapp.number = 2231231
foodapp.pin = 231

// console.log(foodapp)

// nested objects
const game1 = {
    username:"ketan",
    userscore:{
        fullhealth:300,
        weaponhelth:400
    },
    userlevel:{
        herolevel:{
            bodylevel:86,
            mindlevel:100
        },
        weaponlevel:78
    }
}

// console.log(game1.userscore?.weaponhelth)

// mergetwo objects

const user1 = {1:"one",2:"two"}
const user2 = {3:"three",4:"foure"}

// const newuser = Object.assign({},user1,user2)
const newuser1 = {...user1,...user2}

// console.log(newuser1)

const newarrayobjects = [
    {
        name:"kapil",
        class:"12",
        number:"100"
    },
    {
        name:"sumit",
        class:"32",
        number:"200"
    },
    {
        name:"Chauhan",
        class:"21",
        number:"430"
    }
]

console.log(newarrayobjects[0].name)