// files don't need a path
// CommonJS module syntax
const person = require('./mymodule1');
console.log(person.name);

// everything compiled to this one app.js file!

// ES2015 Module
import {person2, sayHello} from './mymodule2';
import greeting from './mymodule2';
// or you could import all with...
// import * as mod from './mymodule2'

console.log(person2.name);
console.log(sayHello());

console.log(greeting);
 
