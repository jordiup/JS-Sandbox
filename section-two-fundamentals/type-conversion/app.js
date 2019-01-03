/*
  The purpose of this exercise is to cover type conversion
*/


let val; // note we use 'let' because we haven't assigned a number and can't use const

// Number to String
val = String(555);
val = String(4+3);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);

// toString() method
val = (5).toString();
val = (true).toString();

// Number() method
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello?'); // returns 'NaN' - not a number
val = Number([2,3,4]); // returns 'NaN' - not a number

// int/float parsing
val = parseInt('100');
val = parseInt('100.3');
val = parseFloat('100.3');

// Output
console.log(val);
console.log(typeof val);
