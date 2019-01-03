/*
  Working with string methods
*/

const firstName = 'Jordi';
const lastName = 'Hermoso';
const spaced = 'random words with spaces';
const tags = 'web design, web-page config, ui, ux';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Jordi';
val +=  ' Hermoso';

val = "Yo can't wait for " + firstName + ' to come pick me up!';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = ('fantastic').length;
val = firstName.length;

// concat()
val = firstName.concat('', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Indexing
val = firstName[0];
val = firstName.indexOf('r');
val = firstName.concat('nedflanders').lastIndexOf('r');

// charAt()
val = firstName.charAt('1');
val = firstName.charAt(firstName.length - 1); // last char of string

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);  // takes last 3 chars

// split()
val = spaced.split(' ');
val = tags.split(',');

// includes()
val = tags.includes('ui');





// Output
console.log(val);
console.log(typeof val);
