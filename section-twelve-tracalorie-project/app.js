// Will hold all of our modules (controller modules etc.)

// Item Controller
const ItemCtrl = (function(){
  // Item constructor
  const Item = function(id,name,distance,latlng){
    this.id = id;
    this.name = name;
    this.distance = distance;
	  this.latlng = latlng;
  }

  // items template data for initial testing
  // items = [
    //  {id: 0, name: 'Night run', distance: 1200},
    //   {id: 1, name: 'Morning run', distance: 3000},
    //  {id: 2, name: 'Night run 2', distance: 1800}
    // ],

  // Data Structure/ State
  const data = {
    // items: StorageCtrl.getItemsFromStorage(),
    items: [],
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
    addItem: function(name, distance, latlng){
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
      newItem = new Item(ID, name, distance, latlng);
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
		  item.latlng = latlng;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
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
const StorageCtrl = (function(){
 // Public methods
 return{
   storeItem: function(item){
     let items = [];
     // Check if any items in LS
     if(localStorage.getItem('items') === null){
       items = [];
       // Push new item
       items.push(item);
       // Set ls
       localStorage.setItem('items', JSON.stringify(items));
     } else {
       items = JSON.parse(localStorage.getItem('items'));

       // Push new item
       items.push(item);

       // Reset ls
       localStorage.setItem('items', JSON.stringify(items));
     }
   },
   getItemsFromStorage: function(){
     console.log(123);
     if(localStorage.getItem('items') === null){
       items = [];
     } else {
       items = JSON.parse(localStorage.getItem('items'));
     }
     return items;
   }
 }

})();

// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: `#item-list`,
    listItems: `#item-list li`,
    addBtn: `.add-btn`,
	  locBtn: `.btn-loc`,
    locText: `p`,
    updateBtn: `.update-btn`,
    deleteBtn: `.delete-btn`,
    backBtn: `.back-btn`,
    clearBtn: `.clear-btn`,
    itemName: `#item-name`,
    itemDistance: `#item-distance`,
    totalDistance: `.total-distance`,
    mapping: `.mapping`,
	  latlng: `.latlng`,
  }

  let mapIsOpen = true;

 return{
   populateItemList: function(items){
     let html = '';

     items.forEach(function(item){
         html += `
           <li id="item-${item.id}" class="collection-item">
             <strong>${item.name}</strong> <em>${item.distance }km</em>
             <a href="#" class="secondary-content">
               <i class="fa fa-edit edit-item"></i>
             </a>
           </li>
			<i class="secondary-content">${item.latlng}</i>
         `;
     });

     // Insert list item
     document.querySelector(UISelectors.itemList).innerHTML = html;
   },
   clearEditState: function(e){
     document.querySelector(UISelectors.updateBtn).style.display = 'none';
     document.querySelector(UISelectors.deleteBtn).style.display = 'none';
     document.querySelector(UISelectors.backBtn).style.display = 'none';
     document.querySelector(UISelectors.addBtn).style.display = 'inline';
     // UICtrl.clearInput();

   },
   showEditState: function(){
     document.querySelector(UISelectors.mapping).style.display = 'none';
     document.querySelector(UISelectors.locBtn).style.display = 'none';
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
       distance: document.querySelector(UISelectors.itemDistance).value,
	   latlng: document.querySelector(UISelectors.latlng).innerHTML
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
       <strong>${item.name}</strong> <em>${item.distance}km</em>
       <a href="#" class="secondary-content">
         <i class="fa fa-edit edit-item"></i>
       </a>
	   <span class="secondary-content">${('' + item.latlng).length > 12 ? '📍' : '' + item.latlng}&nbsp;&nbsp;</span>
	   <!-- <i class="secondary-content">${item.latlng}</i> -- >
     `;
     // Insert item
     document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
   },
   addItemToForm:function(){
     document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
     document.querySelector(UISelectors.itemDistance).value = ItemCtrl.getCurrentItem().distance;
     UICtrl.showEditState();
   },
   removeItems: function(){
     let listItems = document.querySelectorAll(UISelectors.listItems);

     // Turn node list into an array
     listItems = Array.from(listItems);

     listItems.forEach(function(item){
       item.remove();
     });
   },
   updateListItem: function(item){
    let listItems = document.querySelectorAll(UISelectors.listItems);

    // Turn node list into an array
    listItems = Array.from(listItems);
    listItems.forEach(function(listItem){
      const itemID = listItem.getAttribute('id');

      if(itemID === `item-${item.id}`){
        document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}</strong> <em>${item.distance}km</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-edit edit-item"></i>
          </a>
		  <i class="secondary-content">${item.latlng}</i>
        `;
      }
    })
   },
   deleteListItem: function(id){
     const itemID = `#item-${id}`;
     const item = document.querySelector(itemID);
     item.remove();
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
   },
   mapToggle: function(){
     if (mapIsOpen == true){
       document.querySelector(UISelectors.mapping).style.display = 'none';
       mapIsOpen = false;
     } else {
       document.querySelector(UISelectors.mapping).style.display = 'block';
       mapIsOpen = true;
     }
   }

 };
})();

// App controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){

  // Load event listeners
  const loadEventListeners = function(e){
      console.log('listeners');

      // Get UI Selectors
      const UISelectors = UICtrl.getSelectors();

      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

      // Add location button (show maps)
     document.querySelector(UISelectors.locBtn).addEventListener('click', showMapBtn);

      // Disable submit on enter
      document.addEventListener('keypress', function(e){
        // "if keycode is 'enter' or if it was hit..."
        if(e.keyCode === 13 || e.which === 13){
          e.preventDefault();
          return false;
        }
      });

      // Edit icon click event
      document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);

      // Item update submit
      document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);

      // Back button event
      document.querySelector(UISelectors.locBtn).addEventListener('click',UICtrl.clearEditState);

      // Delete item event
      document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);

      // Clear all items
      document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);

}

  // Add location click
  const showMapBtn = function(e){
    e.preventDefault();
    UICtrl.mapToggle();
  }


  // Add item submit
  const itemAddSubmit = function(e){
    e.preventDefault();
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    // Form validation, check for name and distance input
    if(input.name !== '' && !isNaN(input.distance)){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.distance, input.latlng);
      // Add itme to UI list
      UICtrl.addListItem(newItem);
      // Get total distance
      const totalDistance = ItemCtrl.getTotalDistance();
      // Add total distance to UI
      UICtrl.showTotalDistance(totalDistance);
      // Store in ls
      StorageCtrl.storeItem(newItem);
      // Clear inputs
      UICtrl.clearInput();
      // Reset the map
      gMap.resetMap();
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
    const updatedItem = ItemCtrl.updateItem(input.name, input.distance, input.latlng);
    // Update UI
    UICtrl.updateListItem(updatedItem);
    // Get total distance
    const totalDistance = ItemCtrl.getTotalDistance();
    // Add total distance to UI
    UICtrl.showTotalDistance(totalDistance);
    // Clear edit state
    UICtrl.clearEditState();
    // Clear inputs
    if(input.name !== '' && !isNaN(input.distance)){
      UICtrl.clearInput();
    }
  }

  const itemDeleteSubmit = function(e){
    // Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total distance
    const totalDistance = ItemCtrl.getTotalDistance();

    // Add total distance to UI
    UICtrl.showTotalDistance(totalDistance);

    // Clear edit state
    UICtrl.clearEditState();

    const input = UICtrl.getItemInput();
    if(input.name !== '' && !isNaN(input.distance)){
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Clear Items event
  const clearAllItemsClick = function(){
    // Delete all items from datastructure
    ItemCtrl.clearAllItems();

    // Remove from UI
    UICtrl.removeItems();

    // Get total distance
    const totalDistance = ItemCtrl.getTotalDistance();

    // Add total distance to UI
    UICtrl.showTotalDistance(totalDistance);

    // Hide UL
    UICtrl.hideList();
  }

  // Public methods
  return {
    init: function(){
      console.log('Initializing app...');

      // Clear edit state
      UICtrl.clearEditState();

      // Run initMap
      gMap.initMap();

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

})(ItemCtrl, StorageCtrl, UICtrl);


// Initialize and add the map
const gMap = (function(){

  // The location of Uluru adn the default centre of map
  var uluru = {lat: -25.344, lng: 131.036};

  let count = 0;
  let marker = null;
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    gestureHandling: "cooperative",
    streetViewControl: false,
    mapTypeControl: false,
  });

  return {
      initMap: function(){

        map.addListener('click', function(e) {
          gMap.placeMarker(e.latLng, map);
        });
      },
      resetMap: function(){
        console.log('resetmap222');
        marker.setMap(null);
        document.querySelector('.latlng').innerHTML = '&nbsp;';
      },
      placeMarker: function(position, map) {
    	 let lat = position.lat();
    	 let lng = position.lng();

    	 document.querySelector('.latlng').innerHTML = lat + ', ' + lng;

        if (count == 0){
            marker = new google.maps.Marker({
              position: position,
              map: map
          });
          map.panTo(position);
          count++;
          console.log(count);
          console.log(marker);
        }
        else {
          marker.setMap(null);

          marker.setMap(map);
          marker.setPosition(position);
          map.panTo(position);
        }
      }
    }

})();
// initMap(); // not sure if needed anymore



// Initialize app
App.init();
