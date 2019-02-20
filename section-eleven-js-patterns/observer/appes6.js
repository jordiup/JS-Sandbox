class EventObserver {
  constructor(){
    this.observers = [];
  }

  subscribe(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }
  unsubscribe(fn){
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  }
  fire(){
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
