// const promisone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('This is kapil');
//         resolve();
//     },1000)
// })

// promisone.then(function(){
//     console.log("promis consumed")
// })

// Promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let a = 100002;
//         let b = 100;
//         for (let i = 0; i < a; i++) {
//             let val = b*i;
//             console.log(val);
//         }
//         resolve();
//     },100)
// }).then(function(){
//     console.log("promis consumed")
// })

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve("Successful Promise resolved");
//     } else {
//       reject("is Accured");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const val = await promiseFive;
//     console.log(val);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// consumePromise();
//  Advance_Topic/Screenshot 2024-12-17 112744.png

// [Advance_Topic/img1.png]

// fetch("https://randomuser.me//api")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // console.log("type of:", typeof (data));
//     const user = data;
//     console.log("the value is: ", user.info.page);
//     console.log("The second value is: ", user.results[0].gender);
//   })
//   .catch((error) => console.log(error));

let arr = [];

fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2024-11-17&sortBy=publishedAt&apiKey=8f404dd0939348359cb43415645dce35"
)
  .then((response) => response.json())
  .then((data) => {
    arr = Object.values(data);

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log(element);
    }
  })
  .catch((error) => console.log(error));
