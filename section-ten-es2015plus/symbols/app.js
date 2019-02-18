// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2); // this logs symbol proving that it is a primitive type

// Two symbols can NEVER equal the same
console.log(Symbol('123') === Symbol('123'));
console.log(`Hello ${sym1.toString()}`)

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

// We can create an object and add these variables as keys
const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1],myObj[KEY2]);

// Symbols are not enumerable in for in
for (let i in myObj){
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
