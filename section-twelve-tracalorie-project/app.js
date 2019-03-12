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
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, distance){
      // Distance to number
      distance = parseInt(distance);
      let found = null;
      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.distance = distance;
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
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
    listItems: `#item-list li`,
    addBtn: `.add-btn`,
    updateBtn: `.update-btn`,
    deleteBtn: `.delete-btn`,
    backBtn: `.back-btn`,
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
               <i class="fa fa-edit edit-item"></i>
             </a>
           </li>
         `;
     });

     // Insert list item
     document.querySelector(UISelectors.itemList).innerHTML = html;
   },
   clearEditState: function(){
     document.querySelector(UISelectors.updateBtn).style.display = 'none';
     document.querySelector(UISelectors.deleteBtn).style.display = 'none';
     document.querySelector(UISelectors.backBtn).style.display = 'none';
     document.querySelector(UISelectors.addBtn).style.display = 'inline';
   },
   showEditState: function(){
     document.querySelector(UISelectors.updateBtn).style.display = 'inline';
     document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
     document.querySelector(UISelectors.backBtn).style.display = 'inline';
     document.querySelector(UISelectors.addBtn).style.display = 'none';
     // UICtrl.clearInput();
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
         <i class="fa fa-edit edit-item"></i>
       </a>
     `;
     // Insert item
     document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
   },
   addItemToForm:function(){
     document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
     document.querySelector(UISelectors.itemDistance).value = ItemCtrl.getCurrentItem().distance;
     UICtrl.showEditState();
   },
   updateListItem: function(item){
    let listItems = document.querySelectorAll(UISelectors.listItems);

    // Turn node list into an array
    listItems = Array.from(listItems);
    listItems.forEach(function(listItem){
      const itemID = listItem.getAttribute('id');

      if(itemID === `item-${item.id}`){
        document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}</strong> <em>${item.distance / 1000}km</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-edit edit-item"></i>
          </a>
        `;
      }
    })
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

      // Disable submit on enter
      document.addEventListener('keypress', function(e){
        // "if keycode is 'enter' or if it was hit..."
        if(e.keyCode === 13 || e.which === 13){
          e.preventDefault();
          return false;
        }
      })

      // Edit icon click event
      document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);

      // Item update submit
      document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);

      // Back button event
      document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);
}

  // Add item submit
  const itemAddSubmit = function(e){
    e.preventDefault();
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    // Form validation, check for name and distance input
    if(input.name !== '' && !isNaN(input.distance)){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.distance);
      // Add itme to UI list
      UICtrl.addListItem(newItem);
      // Get total distance
      const totalDistance = ItemCtrl.getTotalDistance();
      // Add total distance to UI
      UICtrl.showTotalDistance(totalDistance);
      UICtrl.clearInput();
    } else {
      // Clear fields
      UICtrl.clearInput();
      // Alert user
      // ....
    }


    console.log('Add', input);
  }

  // Item edit click
  const itemEditClick = function(e){

    if(e.target.classList.contains('edit-item')){

        // Get list item id (id-0, id-1 etc.)
        const listId = e.target.parentNode.parentNode.id;
        console.log(listId);

        // Break into an array
        const listIdArr = listId.split('-');

        // Get the actual id
        const id = parseInt(listIdArr[1]);

        // Get item
        const itemToEdit = ItemCtrl.getItemById(id);

        // Set current item
        ItemCtrl.setCurrentItem(itemToEdit);
        console.log(itemToEdit);

        // Add item to form
        UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    e.preventDefault();
    // Get item update
    const input = UICtrl.getItemInput();
    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.distance);
    // Update UI
    UICtrl.updateListItem(updatedItem);
    // Get total distance
    const totalDistance = ItemCtrl.getTotalDistance();
    // Add total distance to UI
    UICtrl.showTotalDistance(totalDistance);
    // Clear edit state
    UICtrl.clearEditState();
  }

  // Public methods
  return {
    init: function(){
      console.log('Initializing app...')

      // Clear edit state
      UICtrl.clearEditState();

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
