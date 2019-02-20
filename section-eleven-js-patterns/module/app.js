// Basic structure

(function(){
  // Declare private variables and functions here


  return {
    // Declare public var and functions
  }
})();


// ~~ Standard module pattern ~~
const UICtrl = (function(){
  let text = 'Hello world';

  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return{
    callChangeText: function(){
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // doesn't work since it private within scope fo module pattern

console.log(UICtrl.text);


// ~~  Revealing module pattern ~~
const itemCtrl = (function(){
  let data = []; // note the underscore, a convention used by some programmers for private vars

  function add(item){
    data.push(item);
    console.log('Item added....');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'John'});
itemCtrl.add({id: 2, name: 'Mark'});
console.log(itemCtrl.get(1));
console.log(itemCtrl.get(2));
