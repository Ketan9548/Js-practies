// const promisone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('This is kapil');
//         resolve();
//     },1000)
// })

// promisone.then(function(){
//     console.log("promis consumed")
// })

fetch('https://randomuser.me//api')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // console.log("type of:", typeof (data));
        const user = data;
        console.log("the value is: ", user.info.page)
        console.log("The second value is: ",user.results[0].gender)
    }).catch((error) =>
        console.log(error))