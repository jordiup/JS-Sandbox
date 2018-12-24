/*
  Working with object literals and object instances.
*/

const person = {
  firstName : 'Jordi',
  lastName : 'Hermoso',
  age : 20,
  email : 'test@gmail.com',
  faveAnimal : '🐈',
  hobbies : ['🏃', '🍪', '📷'],
  address : {
    state: 'WA',
    city : 'Perth'
  },
  getBirthYear : function(){
    return 2018 - this.age;
  }
}

let val;

// Get entire object
val = person;
// Get specific value
val = person.firstName;
val = person.age;
val = person.hobbies[2];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

// Array of people
const people = [
  {name:'Kim', age:30},
  {name:'Mike', age:27},
  {name:'Jack', age:72},
];
// Forloop to print names
for (let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

// Output
console.log(val);
console.log(typeof val);
