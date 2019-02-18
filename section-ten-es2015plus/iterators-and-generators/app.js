// Iterator example
function nameIterator(names){
  let nextIndex = 0;

  // returning na object with a next function
  return {
    next: function(){
      return nextIndex  < names.length ? // ternary operator
        { value: names[nextIndex++], done: false } : // if true ...
        { done: true } // else ...
    }
  }
}


// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
let names = nameIterator(namesArr);

// Each console log demonstrates an iteration through the array
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);





// Generator example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name); // logs the generator

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);





// ID Creator
function* createIds(){
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
