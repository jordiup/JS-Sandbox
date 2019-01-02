/*
  Tutorial on creating elements, and adding things such as ID attributes.
*/

let val;

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New item');

// Create text node and append
li.appendChild(document.createTextNode('hello world!')); // could also use a variable

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li); // *adds list item of hello world

// Add cross link element to li
const link = document.createElement('a'); // using const is fine bc we're not redeclaring them
link.className = 'delete-item secondary-content'; // Add class to link element
link.innerHTML = '<i class="fa fa-remove"></i>'; // add cross icon (html)

// Append link into li
li.appendChild(link); // now we have the 'x'!

/*
  Later on once we have a functional projectd you'll be able to have actual actions that work
*/


// Output
console.log(val);
