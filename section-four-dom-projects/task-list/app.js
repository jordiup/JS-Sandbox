
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
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit',addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click',clearTasks);
  // Filter task event
  filter.addEventListener('keyup',filterTasks);
};



// Get tasks form Local Storage
function getTasks(){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks=[];
  } else {
    JSON.parse(localStorage.getItem('tasks'));
  }

  // Loop through each task that create a dom element
  tasks.forEach(function(task){
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node with the form text and append to li
  li.appendChild(document.createTextNode(task));
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
});


}


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
  // Store task in local storage ⭐
  storeTaskInLocalStorage(taskInput.value);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
};


// Store in local storage
function storeTaskInLocalStorage(task){
  let tasks;
  // If there's nothing in tasks make an empty array
  if(localStorage.getItem('tasks') === null){
    tasks=[];
  // Otherwise parse it as JSON
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Push it onto the array
  tasks.push(task);
  // Store the variable, wrapped with the function stringify()
  localStorage.setItem('tasks',JSON.stringify(tasks));
};



let count = 0;
function removeTask(e){
  if (e.target.parentElement.classList.contains
    ('delete-item')) {
    // Asks if their sure on first delete
    if (count == 0){
      if (confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        count++;
      }
    }
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
};

  // Remove from LS
  function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks=[];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        // if the task item equals the task then we delete
        if(taskItem.textContent === task){
          // we want to delete one from the index
          tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

  };



// Clear tasks
function clearTasks(){
  // Primitive delete - slower performance
    // taskList.innerHTML = '';

  // While loop delete - better performance
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS
  clearTasksFromLocalStorage();
};

// Clear from Local Storage
function clearTasksFromLocalStorage(){
  localStorage.clear();
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
