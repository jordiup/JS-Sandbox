/*
  Last lecture was about constructors and the 'this' keyword. Now we will look at  other core objects which can use constructors, such as the core primitive types Strings, numbers, booleans. This won't be used very often but is taught to encompass all aspects of JS and prevent later confusion.
*/


// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

name2.foo = 'bar';
console.log(name2);

// name1 test, returns YES
if (name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// name2 test. returns NO
if (name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}



// Boolean
const bool1 = true;
const bool2 = new Boolean(true);



// Fucntion
const getSum1 = function(x,y){
  return x + y;
};
const getSum2 = new Function('x','y','return x + y');  // final arguement is the functions body, very weird! Also note the declaration with 'new' and a capitalised Function literal
console.log(getSum1(1,1));
console.log(getSum2(2,2));



// Object
const john = {name: 'John'};
const john2 = new Object({name: 'John2'});
console.log(john, john2);



// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1,arr2);



// Regular expressions
const re1 = /\w+/;  // wrapped in forward slashes
const re2 = new RegExp('\\w+'); // unwrapped, needs escaping
console.log(re1, re2);
