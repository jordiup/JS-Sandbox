/*
  Working with if and else statements and comparison operators.
*/

const id = 100;

// EQUAL TO
if (id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 101){
  console.log('INCORRECT');
}

// EQUAL TO VALUE AND TYPE
if (id === 100){
  console.log('CORRECT');
}

// NOT EQUAL TO VALUE AND TYPE
if (id !== 100){
  console.log('INCORRECT');
}

// Test for id
if (id){
  console.log(`The id is: ${id}`)
}



// Test to see if defined
// const notdefined = 0; // uncomment to define
if (typeof notdefined !== 'undefined'){
  console.log(`The id is: ${notdefined}`)
} else {
  console.log('UNIDEFINED');
}

const color = 'green';

if (color == 'red'){
  console.log('color is red! 🔴');
} else if(color == 'blue'){
  console.log('color is blue! 🔵');
} else if(color == 'green'){
  console.log('color is green! 💚');
}

const name = 'Steve Jobs';
const age = 42;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if (age >=13 && age <= 19){
  console.log(`${name} is an teenager`);
} else if (age >=20 && age <= 100){
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} can run in the race`);
}

/*
  TERNERARY OPERATORS
  (if this is true; correct : else incorrect)
*/
console.log(id == 100 ? 'CORRECT' : 'INCORRECT');


// WITHOUT BRACES
if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');


// Output
// console.log(val);
// console.log(typeof val);
