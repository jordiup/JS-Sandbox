/*
  Tutorial on mouse events.
*/

let val;

// A few variables that point to selectors...
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

/*
  Mouse events:
  Uncomment a line to see the respective event
*/
// Click
    // clearBtn.addEventListener('click', runEvent);
// Double click - commented out for cleanness
    // clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
    // clearBtn.addEventListener('mousedown',runEvent);
// Mouseup
    // clearBtn.addEventListener('mouseup',runEvent);
// Mouseout
    // card.addEventListener('mouseout', runEvent);
// Mouseenter (only fires on initial parent element)
    // card.addEventListener('mouseenter', runEvent);
// Mouseleave (only fires on initial parent element)
    // card.addEventListener('mouseleave', runEvent);

// Mousemove - whenever there's movement (used to trigger heading change below)
card.addEventListener('mousemove', runEvent);


// Event handler
function runEvent(e) { // e for event
  console.log(`Event type: ${e.type}`); // logs 'event type: click'

  // Changes to make heading display coordinates of mouse
  heading.textContent=`MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  // Adds RGB background color 🙌 🐵 ❗ 🌈
  document.body.style.backgroundColor = `rgb(${e.offsetX}, 40, ${e.offsetY})`;
}



// Output
console.log(val);
