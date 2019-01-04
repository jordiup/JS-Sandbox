/*
  Tutorial on event bubbling and event delegation.
  The 'bubbling up' of events through the dom via its parents.
  Delegation - you put a listener on one of the parent elements, and then use logic inside of the handler to target the element you actually want.
*/

// EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click',
  function(){
    console.log('card-title') // clicking on the card-title does a console log
  }
);

document.querySelector('.card-content').addEventListener('click',
  function(){
    console.log('card-content') // clicking on the card-content also does a console log!
  }
);

document.querySelector('.col').addEventListener('click',
  function(){
    console.log('col') // clicking on the col class also does a console log!
  }
);
/*
  Now with three event listeners you can see the effect of event bubbling, when the title is now clicked on all events are triggered, bubbling up the dom.
*/


// EVENT DELEGATION - must be used when there is also dynamic insertion of elements
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click',deleteItem); // used to test whole document body

function deleteItem(e){
  // class name - specific
    // console.log(e.target);
    // if (e.target.parentElement.className === 'fa fa-remove'){ // must use if statement to discern from rest of HTML body
    //   console.log('delete item'); // now this works on more than just one!
    // }

  // class list - general
  console.log(e.target);
  if (e.target.parentElement.classList.contains('delete-item')){ // must use if statement to discern from rest of HTML body
    console.log('delete item'); // now this works on more than just one!
    e.target.parentElement.parentElement.remove();
  }
}

/*
  Event delegation:
    - put listener on parent, where you're looking for
    - then put a condition to find the specific target
    - then adding your functionality
*/
