/*
  Object literals

  ES6 are like a syntactic sugar, a convenient way to right object oriented code. We want to learn how it works underneath too!

  Great in most cases, but if you want multiple instances you'll want to create a constructor.
*/
const gabriel = {
  name: 'Gabriel 👨',
  age: '20'
}
console.log('Object literal printout: ' + gabriel);
console.log(gabriel);
console.log(gabriel.age);


// Person constructor
function Person(name, dob){
  this.name = name; // refers to the current instance of the object
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this); // logs twice becuase we've instantiated two objects
}
const gabriel2 = new Person('Gabriel 👨', '9-03-1998');
console.log(gabriel2);
console.log(this); // when in global scope, pertains to window object
console.log(gabriel2.calculateAge());
