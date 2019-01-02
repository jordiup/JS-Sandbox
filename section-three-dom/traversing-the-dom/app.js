/*
  Tutorial on traversing the dom - moving up and down, parents and children
*/

let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); // selects the first item
val = listItem;
val = list;


/*
  Look at different properties attached to these items/nodes
*/

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeType;

    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doc type


// get children element nodes
val = list.children; // html collection
val = list.children[1];
list.children[1].textContent = 'Hello';

// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];


// first child
val = list.firstChild; // first child will give the first node - in this case it's text
val = list.firstElementChild; // gives first actual element or list item


// last child
val = list.lastChild;
val = list.lastElementChild;


// count child elements
val = list.childElementCount;


// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // also can do parents of parents i.e. 'moving up or down'


// get next sibling
val = listItem.nextSibling; // returns a text node
val = listItem.nextElementSibling.nextElementSibling; // returns html element

// get previous sibling (or combined)
val = listItem.previousSibling;
val = listItem.previousElementSibling.previousElementSibling; // returns null since their is no previous
val = listItem.nextElementSibling.previousElementSibling;


// Output
console.log(val);
