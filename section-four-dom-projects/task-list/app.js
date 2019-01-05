
// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'); // the ul
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); //  id of filter
const taskInput = document.querySelector('#task'); //  id of task

/*
  We'll need to submit on the task form, rather than just putting on global scope we'll load all event listeners with a function
*/

// Load event listeners
loadEventListeners();

// Load event listeners
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit',addTask);
};

// Add task - takes an event object (event handler)
function addTask(e){

  // If nothing is entered alert user
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node with the form text and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link
  const link = document.createElement('a');
  // Add class name
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHtml = '<i class="fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
};
