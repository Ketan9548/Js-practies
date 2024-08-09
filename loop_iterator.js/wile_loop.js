// let index = 0

// while (index < 100) {
    // console.log(index)
    // index = index+2;
// }


// do while
// let index = 1
// do {
    // console.log(index)
    // index = index+4
// } while (index < 20);


const arr = [
    {
        name:"kapil",
        password1:"321121",
        username:"Kapil@321"
    },
    {
        name:"sumit",
        password2:"986534",
        username:"sumit@321"
    },
    {
        name:"prince",
        password3:"98765",
        username:"prince@321"
    }
]

arr.forEach((item,index,value)=>{
    if(index == 1){
        console.log(value[index].username);
    }
})