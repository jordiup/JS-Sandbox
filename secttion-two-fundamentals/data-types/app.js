/*

# ⭐ Key points from prelude 🌟

Two key data types:
- Primitive, stored directly in location the variable accesses stored on the stack
- Referenced, accessed by reference. Objects are stored on the heap. Instead they're a pointer to a location in memory.


JS is a dynamically typed language:
- types are associated with values not variables
- the same variable can hold multiple types
- we do not not need to specify types (unlike most other languages)
- There are superset of JS and addons to allow static typing e.g. TypeScript and Flow

*/

// PRIMITIVE

  // Strings
  const name = 'Jordi H';
  // Number
  const age = 20;
  // Boolean
  const lookingForJob = true;
  // Undefined (default value for all variables)
  let test;
  // Symbol
  const sym = Symbol();
  // 'typeof' test
  console.log(typeof sym);


// REFERENCE TYPES (OBJECTS)

  // Array
  const hobbies = ['running 🏃', 'cooking 🍰', 'coding 💻', 'partying 💃', 'film photography 📷'];
  // Object literal
  const address = {
    city: 'Perth',
    state: 'WA'
  }
  // Object literal pt ii
  const today = new Date();
  console.log(today);
  console.log(typeof today);




  // console.log(sym)
