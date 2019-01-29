/*
  Many languages use class based objects i.e. Java, PHP.
  Each object in JS has a prototype, a prototype is an object itself. All objects inherit their methods and properties from their prototype.

  There can object.protype, person.prototype, and things called Prototype chains.

*/

// Object.prototype

// Person constructor
function Person(fName, lName, dob){
  this.fName = fName;
  this.lName = lName
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age, moved into __proto__, the prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('John', 'Smith', '8-12-90');
const mary = new Person('Mary', 'Doe', '9-12-90')

console.log(mary);
console.log(john.calculateAge()); // still able to be accessed


// Get full name
Person.prototype.getFullName = function(){
  return `${this.fName} ${this.lName}`
}

// Marriage function, changes last name to partners
Person.prototype.marriage = function(partner){
  this.lName = partner.lName;
  return `new name: ${this.fName} ${this.lName}`
}


console.log(mary.getFullName());
console.log(mary.marriage(john));

console.log(mary.hasOwnProperty('fName'));
console.log(mary.hasOwnProperty('first-name'));
