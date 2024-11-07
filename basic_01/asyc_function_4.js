// normal function
// function get(){
//     console.log(2)
// }
// get()

// arrow function
// const get = ()=>{
//     console.log(3)
// }

// get()

// asyc function
// const getdata = async () => {
//   const data = "20 cr"; // Or fetch data from an API
//   console.log(data);
// };

// getdata();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
