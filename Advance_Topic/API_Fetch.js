const promisone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('This is kapil');
        resolve();
    },1000)
})

promisone.then(function(){
    console.log("promis consumed")
})