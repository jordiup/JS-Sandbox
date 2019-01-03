/*
  Working with arrays and array methods
*/

const numbers = [43,56,23,44,12,4];
const numbers2 = new Array(22,34,22,4,12,4);
const numbers3 = new Array(22,34,22,4,12,4);
const fruit = ['🍎','🍌','🍐','🍋'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Array Length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Get first value
val = numbers[0];
// Insert value into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(12);
// Mutating arrays (adding on 250)
numbers.push(250);
// Adding on value to front
numbers.unshift(294);
// Take off from end (250 gets removed)
numbers.pop();
// Take off from front (294 gets removed)
numbers.shift();
// Splice values (takes off 53)
numbers.splice(1,1);
// Reverses array
numbers.reverse();

// concatenate array (adds numbers 1 to numbers 2)
val = numbers.concat(numbers2);

// sort an array alphabettically
val = fruit.sort();
val = numbers.sort();

// use the compare funct to sort (low to high)
val = numbers.sort(function(x,y){
  return x - y;
});

// use the compare funct to sort (high to low - reverse)
val = numbers.sort(function(x,y){
  return y - x;
});

// find under 50
function under50(num){
    return num < 50
}
val = numbers3.find(under50);



// Output
console.log(numbers);
console.log(val);
console.log(typeof val);
