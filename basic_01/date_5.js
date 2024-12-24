// dates

const todaydate = new Date();

// console.log(todaydate)
// console.log(todaydate.toDateString())
// console.log(todaydate.toLocaleDateString())
// console.log(todaydate.toLocaleString())
// console.log(todaydate.toISOString())
// console.log(todaydate.toJSON())


let mytimestamp = Date.now();
// console.log(mytimestamp);


let newdate = new Date();
// console.log(newdate.getHours())
newdate.toLocaleString('default',{
    weekday:'long'
})

console.log(newdate)