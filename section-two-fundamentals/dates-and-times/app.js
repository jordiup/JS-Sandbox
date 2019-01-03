/*
  Working with dates and times.
*/

let val;

const today = new Date();
let birthday = new Date('Tue Dec 25 2018 12:10:23 GMT+0800');
birthday = new Date('12-03-1998');
birthday = new Date('12/03/1998');

let thisMonth = today.getMonth(); // zero based
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setHours(3);

// Output
console.log(val);
console.log(typeof val);
