const course = {
    name:"web dev",
    price:"999",
    duration:"2hr"
}

// destructure of the objects
const {price:courseprice} = course
const {duration:Courseduration} = course

console.log(courseprice)
console.log(Courseduration);
