// for of loop
// const arr = ["deadpool", "hero", "wolverien", "ironman"]

// for (const num of arr) {
//     console.log(num)
// }


// maps
// const map1 = new Map()

// map1.set('a', 1)
// map1.set('b', 7)
// map1.set('c', 2)
// map1.set('d', 5)
// map1.set('e', 3)


// console.log(map1)
// forof loop
// for (const [index,value] of map1) {
//     console.log(index , "->", value)
// }

// const obj1 = {
    // name: "kapil", 
    // score: "23",
    // hight: 43,
    // age: 23
// }

// for (const key in obj1) {
    // console.log(key)
    // console.log(`the key is ${key} and value is ${obj1[key]}`)
// }

// const jobs = ["indeed","glashdoor","nakuri.com"]

// jobs.forEach( function (val){
//     console.log(val);
// })
// jobs.forEach( function (val,index,jobs){
//     console.log(val);
//     console.log(index);
//     console.log(jobs);
// })


// const subjects = [
//     {
//         name:"hindi",
//         logo:"H"
//     },
//     {
//         name:"Maths",
//         logo:"M"
//     },
//     {
//         name:"English",
//         logo:"E"
//     }
// ]


// const a = subjects.forEach((items,index,subjects)=>{
//     console.log(subjects[0].logo)
// })


const arr = [2,6,4,3,5,2,7,3]

// const n = arr.filter((num)=> num>3)
const n = arr.filter((num)=> {
    return num>3
})

console.log(n)