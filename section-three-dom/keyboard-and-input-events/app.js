/*
  Tutorial on keyboard and input events
*/


const form = document.querySelector('form'); // in a larger application you'd want to be more specific
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');


// Clears input field
taskInput.value = '';

// Runs event on submit
// form.addEventListener('submit', runEvent);

// Captures keydown input
// taskInput.addEventListener('keydown', runEvent);

// Event on keyup - prints input once key is let go
// taskInput.addEventListener('keyup', runEvent);

// Event on keypress - general, whenever key is pressed
// taskInput.addEventListener('keypress', runEvent);

// Focus - when clicked inside you get focus
// taskInput.addEventListener('focus', runEvent);

// Blur - the opposite to focus, when you click out
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input - any type of input such as typing, cut, paste etc.
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change',runEvent);

function runEvent(e){
  console.log(`Event type: ${e.type}`);

  console.log(taskInput.value); // gets form value - hardcoded default is 'walk the dog'

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // Prevent a redirect on submit - usually used
  // e.preventDefault();
};
