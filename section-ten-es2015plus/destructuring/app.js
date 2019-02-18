// Destructuring assignment
let a, b;

[a,b] = [100,200];
// Rest pattern
[a,b, ...rest] = [100,200,300,400,500];

console.log(rest);
console.log(b);

({ a,b } = { a:100, b:200, c:300, d:400, e:500});
({ a,b, ...rest} = { a:100, b:200, c:300, d:400, e:500});
console.log(rest); // will return c:300, d:400, e:500


// Array Destructuring

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(people);
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let p1,p2,p3;
[p1,p2,p3] = getPeople();

// Object destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Old ES5 way
  // const name = person.name,
  //   age = person.age,
  //   city = person.city;

// New ES6 Destructuring
const { name,age,city } = person;

console.log(name,age,city);
