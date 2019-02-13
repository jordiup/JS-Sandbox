// Function expression, the standard way
const sayHello1 = function(){
  console.log('Hello1');
}

// Arrow function
const sayHello2 = () => {
  console.log('Hello2');
}

// Arrow function one-liner, no need for braces
const sayHello3 = () => console.log('Hello3');

// Return object: this may present trouble when returning an object literal, in this case you must wrap it in parenthesis
const sayHello4 = () => ({msg: 'Hello4'});

// Single param does not need parenthesis
const sayHello5 = name => console.log(`Hello ${name}`);

// Single param does not need parenthesis
const sayHello6 = (firstName, lastName) => console.log(`Hello ${firstName}, ${lastName}`);

// const array declaration
const users = ['cyberMan','cyberLady','mysteryPerson'];

// Non-arrow-function approach
const nameLengths = users.map(function(name){
  return name.length;
});

console.log(nameLengths);

// Arror function approach (shorter)
const nameLengths2 = users.map(name => name.length);
console.log(nameLengths2);

sayHello1();
sayHello2();
sayHello3();
console.log(sayHello4());
sayHello5('Jordi');
sayHello6('Jordi','Hermoso');


// -----------------------------------------------------------

// Event listener on button1
document.getElementById('button1').addEventListener('click', getText);

// Get local text file data (with arrow functions now!)
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}
