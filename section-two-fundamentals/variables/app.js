/*
  Variables, const and let
*/

// console log testing
var name0 = 'John Doe';
console.log(name0);
name0 = 'Jordi H'
console.log(name0)

// init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// variables names can include, letter, numbers, _ and $
// they cannnot start with a number

// naming schmemes
var firstName = 'Jordi'; // Camel case
var FirstName = 'Jordi'; // Pascal case ( used for classes )
var first_name = 'Jordi'; // Underscore
var _firstname = 'Jordi'; // Don't use - used for private vars later on


// LET
let name1;

// CONST - constant
const name = 'Jordi';
console.log(name);

const person = {
    name: 'Sarah',
    age: 25
}
console.log(person);
person.name = 'Santa 🎅';
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
