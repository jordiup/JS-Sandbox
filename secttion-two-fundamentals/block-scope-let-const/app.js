/*
  Block scope
  Let and const vs. var.
*/

// Global Scope
var a = '1';
let b = '2';
const c = '3';

console.log('Global Scope:', a, b, c);

// Function scope - seperate variables and scope
function test() {
  var a = '4';  // function scope and declaration
  let b = '5';
  const c = '6';
  console.log('Function Scope:', a, b, c);
}
test();

// Block scope - anything wrapped in curly braces
if (true){
  var a = '4';  // function scope and declaration
  let b = '5';
  const c = '6';
  console.log('If Scope:', a, b, c);
}

// block scope has now changed the values for var (a)
console.log('Global Scope:', a, b, c);

for (var a = 0; a < 6; a++){ // bad, should use let/const
  console.log(`Loop ${a}`);
}

// block scope has now changed the values for var (a)
console.log('Global Scope:', a, b, c);





// Output
// console.log(val);
// console.log(typeof val);
