document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open, parse in the request you want - we'll use GET, then filename, and third param is 'true' to make it asynchronous
  xhr.open('GET','data.txt',true);

  // xhr.onload = function (){
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200){ // 'this' refers to the xhr object
  //     console.log(this.responseText);
  //   }
  // }

  // Optional xhr param - used for spinners and loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState); // logs ready state 3
  }

  xhr.onreadystatechange =  function(){
    if(this.status === 200 && this.readyState === 4){
      console.log('READYSTATE', xhr.readyState);
      console.log(this.responseText);
      // Print response text as HTML
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // Error xhr param
  xhr.onerror = function(){
    console.log('Request error...');
  }

  // To finalise everything you must 'send'
  xhr.send();


  // HTTP Statuses
  // 200 - "OK"
  // 403 - "Forbidden"
  // 404 - "Not found"

  // readyState Values
  // 0 - request not initiialised
  // 1 - server connection established
  // 2 - request received
  // 3 - processing request
  // 4 - request finished and response is ready
}
