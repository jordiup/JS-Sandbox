function EventObserver(){
  this.observers = [];
}

EventObserver.prototype = {
  // a function that takes in a function, fn
  subscribe: function(fn) {
    // pass in the function
    this.observers.push(fn);
    // notify the users that you've sub'd to the handler
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn){
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  },
  fire: function(){
    this.observers.forEach(function(item){
      item.call();
    });
  }
}

const click = new EventObserver();

// Event listeners
// sub
document.querySelector('.sub-ms').addEventListener('click', function(){ click.subscribe(getCurMilliseconds);
});
// unsub
document.querySelector('.unsub-ms').addEventListener('click', function(){ click.unsubscribe(getCurMilliseconds);
});
// sub S
document.querySelector('.sub-s').addEventListener('click', function(){ click.subscribe(getCurSeconds);
});
// unsub S
document.querySelector('.unsub-s').addEventListener('click', function(){ click.unsubscribe(getCurSeconds);
});
// fire
document.querySelector('.fire').addEventListener('click', function(){ click.fire();
});

// Click handler
const getCurMilliseconds = function(){
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
const getCurSeconds = function(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}
