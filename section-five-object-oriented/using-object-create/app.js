/*
  Another way to create objects with Object.create
  Create prototypes within a parent object and then add different properties with different prototype methods.
*/

const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary.greeting());
mary.getsMarried('Carnegy');
console.log(mary.greeting());

/*
  Second parameter is an object, where each property is an object itself with values/keys
*/
const jordi = Object.create(personPrototypes, {
  firstName: {value: 'Jordi'},
  lastName: {value: 'Hermoso'},
  age: {value: 36}
});

console.log(jordi);
console.log(jordi.greeting());
