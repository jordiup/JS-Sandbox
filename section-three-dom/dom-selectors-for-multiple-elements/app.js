/*
  Tutorial on dom selectors for multiple elements

  Return either:
  - HTML collection
  - Or a node list

  Both can be converted to arrays easily
*/


// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent  = 'Hello';

// selecting from the UL
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// getElementByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[2].style.color = 'green';
lis[2].textContent  = 'Green Hello';


// A HTML collection is not an array... convert HTML collection into arrays
lis = Array.from(lis);
lis.reverse();// throws error by default
console.log(lis);

// for each method to print each li
lis.forEach(function(li, index){
    console.log(li);
    // li.textContent = 'Hello';
    li.textContent = `${index}:Hello`;
});


// Qury Selectcor ALll - returns Node list counts not only elements but text nodes etc. (document.querySelectorAll)
 const itemsAll = document.querySelectorAll('ul.collection li.collection-item');
 console.log(itemsAll); // returns a node list, not an array!

 itemsAll.forEach(function(item,index){
   item.textContent = `${index}: hello!`;
 });

 const liOdd = document.querySelectorAll('li:nth-child(odd)');
 const liEven = document.querySelectorAll('li:nth-child(even)');

// for each
 liOdd.forEach(function(li,index){
   li.style.background = '#ccc';
 });

// for loop
 for(let i = 0; i < liEven.length; i++){
   liEven[i].style.background = '#f4f4f4';
 };
