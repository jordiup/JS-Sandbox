/*
  Tutorial on removing and replacing elements.
*/

let val;

//  REPLACE ELEMENT
// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task list'));

// Get the old heading to replace
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action'); // select class the class '.card-action'

// Replace
cardAction.replaceChild(newHeading, oldHeading); // replace new heading with old heading

/*
  The heading now has a new id of 'task-tile' and text that's repalced with 'Task List'
*/


// REMOVE AN ELEMENT
const lis = document.querySelectorAll('li'); // selects all the list items
const list = document.querySelector('ul'); // ... also create a variable for the list itself

// Remove list item - remove()
lis[0].remove(); // removes the first tiem

// Removing by child - removeChild()
list.removeChild(lis[3]); // removes the third



// CLASSES AND ATTR
const firstLi = document.querySelector('li:first-child'); // selecting the 'a' tag with the first-child
const link = firstLi.children[0]; // selects the child of the firstLi

// Classes
val = link.className; // returns a string of the classes
val = link.classList; // a DOM token list - setup like an array
val = link.classList[0]; // can be acessed individually
link.classList.add('test'); // test has now been added to the class string
link.classList.add('removedTest'); // test2 has now been added to the class string
link.classList.remove('removedTest'); // test2 has now been removed from the class string

// Attributes
val = link.getAttribute('href'); // gets a specific attribute - the #
val = link.setAttribute('href', 'http://google.com'); // sets an attribute
val = link.hasAttribute('title'); // checks an attribute (boolean)
val = link.setAttribute('title', 'Google'); // sets an attribute
val = link.hasAttribute('title'); // returns true now
val = link.setAttribute('id', 'toBeRemoved');
val = link.removeAttribute('id', 'toBeRemoved'); // removes an attribute (the id)







// Outputs
console.log(newHeading);
console.log(firstLi);
console.log(link);
console.log(val);
