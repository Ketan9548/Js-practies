const name = "kapil";
// console.log(name)

//  String interpolation

// console.log(`my name is ${name.toUpperCase()}`)

// let newstring = "     Ironman            v";
// console.log(newstring);
// console.log(newstring.trim());



// map for iteration
const data = [
  {
    id: 1,
    name: "n1",
    section: 2,
  },
  {
    id: 2,
    name: "n3",
    section: 22,
  },
  {
    id: 3,
    name: "n9",
    section: 12,
  },
  {
    id: 4,
    name: "n78",
    section: 10,
  },
];

data.map((val)=>(
    console.log(val.name)
))
