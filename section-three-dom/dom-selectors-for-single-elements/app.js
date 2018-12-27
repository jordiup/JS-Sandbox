/*
  Tutorial on dom selectors for single elements
*/

// Get element by id - document.getElementById()
console.log(document.getElementById('task-title'));


// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
console.log(document.getElementById('task-title'));
document.getElementById('task-title').style.background = '#eee';
// document.getElementById('task-title').style.border-radius = '6px'; // this one doesn't work, because you need Query Selector (newer)!
// document.getElementById('task-title').style.display = 'none'; // completely removes - used for button actions

// Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:darkgreen">Task List</span>';

// Alternative option using const  (change content)
const taskTitle = document.getElementById('task-title');

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:darkgreen">Task List</span>';


// QUERY SELECTOR (ES6) - Change content
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// first li colored blue
document.querySelector('li').style.color='darkblue';

// select second and last items, color maroon
document.querySelector('li:nth-child(2)').style.color='maroon';
document.querySelector('li:last-child').style.color='maroon';

// color evens orange
document.querySelector('li:nth-child(even)').style.color='darkorange';


// ... next up we'll be looking at querySelectorAll yay!
