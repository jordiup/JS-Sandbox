/*
  Previously: Object oriented programming from ES5, now we'll take a look at classes in ES6.

  If you want support for IE 11 or earlier, you'll need to compile ES6 down to ES5 or earlier.
*/

class Person {
  // Constructor which takes in any properties we want to set
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // Any method in the class will be added to the prototype
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(lastName){
    this.lastName = lastName;
  }

  // Static methods, can only be called with class name
  static addNumbers(x,y){
    return x + y;
  }
}

  const mary = new Person('Mary', 'Williams','11-13-1980');
  console.log(mary);
  mary.getsMarried('new name!');
  console.log(mary);
  console.log(Person.addNumbers(1,2));
