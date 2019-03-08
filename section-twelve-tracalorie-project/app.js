// Will hold all of our modules (controller modules etc.)

// Item Controller
const ItemCtrl = (function(){
  // Item constructor
  const Item = function(id,name,distance){
    this.id = id;
    this.name = name;
    this.distance = distance;
  }

  // Data Structure/ State
  const data = {
    items: [
      // Template data for initial testing
      // {id: 0, name: 'Night run', distance: 1200},
      // {id: 1, name: 'Morning run', distance: 3000},
      // {id: 2, name: 'Night run 2', distance: 1800}
    ],
    currentItem: null, // when we update
    totalDistance: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    },
    addItem: function(name, distance){
      let ID;
      // Create ID
      if(data.items.length >0){
        // A function for auto incrementing id from array
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Parse the distance as a number
      distance = parseFloat(distance);
      // Create a new item
      newItem = new Item(ID, name, distance);
      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getTotalDistance: function(){
      let total = 0.0;

      data.items.forEach(function(item){
        total += item.distance;
      });

      // Set total distance in data structure
      data.totalDistance = total.toFixed(1);

      // Return total
      return data.totalDistance;
    },
    logData: function(){
      return data;
    }
  }

})(); // in order for this to invoke you need another pair of parethesis

// Storage controller
const StrCtrl = (function(){
 return{};
})();

// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: `#item-list`,
    addBtn: `.add-btn`,
    itemName: `#item-name`,
    itemDistance: `#item-distance`,
    totalDistance: `.total-distance`,
  }

 return{
   populateItemList: function(items){
     let html = '';

     items.forEach(function(item){
         html += `
           <li id="item-${item.id}" class="collection-item">
             <strong>${item.name}</strong> <em>${item.distance / 1000}km</em>
             <a href="#" class="secondary-content">
               <i class="fa fa-edit"></i>
             </a>
           </li>
         `;
     });

     // Insert list item
     document.querySelector(UISelectors.itemList).innerHTML = html;
   },
   getSelectors: function(){
     return UISelectors;
   },
   getItemInput: function(){
     return {
       name: document.querySelector(UISelectors.itemName).value,
       distance: document.querySelector(UISelectors.itemDistance).value
     }
   },
   addListItem: function(item){
     // Ensure list is visible
     document.querySelector(UISelectors.itemList).style.display = 'block';
     // Create li element
     const li = document.createElement('li');
     // Add class
     li.className = 'collection-item';
     // Add ID
     li.id = `item-${item.id}`;
     // Add HTML
     li.innerHTML = `
       <strong>${item.name}</strong> <em>${item.distance / 1000}km</em>
       <a href="#" class="secondary-content">
         <i class="fa fa-edit"></i>
       </a>
     `;
     // Insert item
     document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
   },
   clearInput: function(){
     document.querySelector(UISelectors.itemName).value = '';
     document.querySelector(UISelectors.itemDistance).value = '';
   },
   hideList: function(){
     document.querySelector(UISelectors.itemList).style.display = 'none';
   },
   showTotalDistance: function(totalDistance){
     document.querySelector(UISelectors.totalDistance).textContent = totalDistance+'km';
   }
 };
})();

// App controller
const App = (function(ItemCtrl, UICtrl){

  // Load event listeners
  const loadEventListeners = function(){
      // Get UI Selectors
      const UISelectors = UICtrl.getSelectors();

      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    e.preventDefault();
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    // Form validation, check for name and calorie input
    if(input.name !== '' && !isNaN(input.distance)){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.distance);
      // Add itme to UI list
      UICtrl.addListItem(newItem);
      // Get total distance
      const totalDistance = ItemCtrl.getTotalDistance();
      // Add total distance to UI
      UICtrl.showTotalDistance(totalDistance);
    } else {
      // Clear fields
      UICtrl.clearInput();
      // Alert user
      // ....      
    }


    console.log('Add', input);
  }


  // Public methods
  return {
    init: function(){
      console.log('Initializing app...')

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Load event listeners
      loadEventListeners();

      console.log(items);
    }
  }

})(ItemCtrl, UICtrl);

// Initialize app
App.init();
