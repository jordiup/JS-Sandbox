// // Async functions will now return a promise
// async function myFunc(){
//   // Sinse asynchronous we can use a wait
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });
//
//   const error = true;
//
//   if(!error){
//     // Wait until promise is resolved
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }
//
// // Can be used because the async now returns promise
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
//
// console.log(myFunc());

// Using fetch (a better use case)
async function getUsers() {
  // Await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  return data;
}

getUsers().then(users => console.log(users));
