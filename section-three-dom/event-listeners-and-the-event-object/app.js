/*
  Tutorial on event listeners and the event object. Can be used for interaction with the webpage.

  We'll be adding an event listeners on to the 'CLEAR TASKS' button.
*/


document.querySelector('.clear-tasks').addEventListener('click',
  function(e){
    console.log('Hello world'); // note this will redirect if href != '#', this is the default behaviour
    e.preventDefault(); // this prevents it without needing the '#'
  }
);

// Named function alternative
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
  console.log('Hello world - via named function');
  e.preventDefault();

  // Object with a whole bunch of window/event info. Most importantley the target
  console.log(e);



  let val;

  // Event target element
  val = e.target;
  val = e.target.id; //gets id
  val = e.target.className; // gets class
  val = e.target.classList[1]; // gets second  item in list (btn)

  e.target.innerText = 'CLEAR TASTS - Changed up! 🚀'; // changes the button text!

  val = e.timeStamp; // gets time stamp
  val = e.clientY; // gets coords relative to window
  val = e.clientX; // gets coords relative to window
  val = e.offsetY; // gets coords relative to button

  console.log(val);
};
