/*
  Tutorial on local and session storage.
*/

// set local storage (will stay until cleared out from settings)
localStorage.setItem('name','John');
localStorage.setItem('age','20');

// set session storage (will leave one session closed)
sessionStorage.setItem('name','Beth');
localStorage.setItem('age','22');

// remove from storage
localStorage.removeItem('name');
sessionStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

// form adds to local storage
document.querySelector('form').addEventListener('submit',
  function(e){
    const task = document.getElementById('task').value;
    localStorage.setItem('task',task);
    console.log(task);

    let tasks;

    if (localStorage.getItem('tasks') === null){ // nothing in there if null
      tasks = []; // set to empty array
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks)); // stringify since it must be saved as a string

    e.preventDefault();
  });

// tasks array that prints out each item from localStorage, JSON encoding/decoding
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
});
