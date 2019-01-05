
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
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click',clearTasks);
  // Filter task event
  filter.addEventListener('keyup',filterTasks);

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
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
};

let count = 0;
function removeTask(e){
  if (e.target.parentElement.classList.contains
    ('delete-item')) {
    // Asks if their sure on first delete
    if (count == 0){
      if (confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        count++;
      }
    }
    e.target.parentElement.parentElement.remove();
  }
  console.log(e.target);
};


// Clear tasks
function clearTasks(){
  // Primitive delete - slower performance
    // taskList.innerHTML = '';

  // While loop delete - better performance
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
};


// Filter tasks
function filterTasks(e){
  const text = e.target.value;
  /* Returns a node list of all list items with this class. A for each allows us to use a forEach(). */
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    // if no match val = -1
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  console.log(text);
};
