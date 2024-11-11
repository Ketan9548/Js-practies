// primative

// 7 types = String, Number , Boolean , null , undefined , Symbol, BigInt

// Refrence Type

//  Array , Objects , Function

//  js is Dynamic type language 
// reasone : let score = 32 // not declayer the number or int

// Cpp is the Static Type language 
// resone : int a = 332; // declayer the int or other datatype in the declaration in the any datatype

// Symbole 
const id = Symbol("123")
const anotherId = Symbol("123")
//  Both are diffrence Symbole

// console.log(id === anotherId)

let object1 = {
    name:"kapil",
    age:"23",
    job:"SDE1"
}

// console.log(Number(object1.age))


// *********************************** memory types *********************************

// Stack(Primative) and Heap(non-Primative) 

let name = "kapil"

let anothername = name
anothername = "ketan"

console.log(name)
console.log(anothername)