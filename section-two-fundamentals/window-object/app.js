/*
  A look at the window object
  - The document object is part of the window object
  - The window object is the global object in client side JS
  - It has a lot to it such as local storage, the fetch API, geolocation, and methods like alert, prompt, confirm etc.

*/

console.log(123);

// Alert
// alert('Hello world');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }
//

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // shows the query string in URL

// Redirect
// window.location.href = 'https://google.com';

// Reload
// window.location.reload();

// History Object - brings us back to wherever we came from
// window.history.go(-3);
val = window.history.length;

// Navigator Object - has to do with the browser itself
val = window.navigator;
val = window.navigator.vendor;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;



// Output
console.log(val);
console.log(typeof val);
