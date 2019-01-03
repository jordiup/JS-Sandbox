/*
  Functions - one of the most important control structures of any program.

*/


// FUNCTION DECLARATIONS

function greet(){
  console.log('Hi 👋');
}

console.log(greet());

function greetByName(firstName = 'John', lastName = 'Smith'){
  console.log('Hi 👋 ' + firstName + ' ' + lastName);
}

console.log(greetByName('Jordi', 'Hermoso'));


// FUNCTION EXPRESSIONS

const square = function(x){
  return x*x;
};
console.log(square(2));
console.log(square()); // NaN


/*
  IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IFFYS)
  (A function that you run and declare at the same time)
*/
(function(){
  console.log('iffy ran...');
})();

(function(name){
  console.log('Hello ' + name + '... iffy ran');
})('Jordi');


/*
  PROPERTY METHODS
  Functions inside of an objects = methods ⭐

*/
const todo = {
  add: function(){
    console.log('add todo...');
  },
  edit: function(id){
    console.log(`edit todo ${id}`);
  }
}

todo.add();
todo.edit(22);

// you can also declare functions for the object externally:
todo.delete = function(){
  console.log('Delete todo... ');
};

todo.delete();
