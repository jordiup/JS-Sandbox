// ES6 version

class Book {
  constructor(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert collumns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><span style="font-family: 'Libre Barcode 128'">${book.isbn}</span>&emsp;<span style="color:grey">(${book.isbn})</span></td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }
  showAlert(message, className){
    // Create a div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target){
    if(target.className === 'delete'){
      // Up from td, to tr (dom traversing) to remove element from dom
      target.parentElement.parentElement.remove();
    }
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// Event listeners
document.getElementById('book-form').addEventListener('submit',
  function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
    // Instantiate book
    const book = new Book(title, author, isbn);
    // Instantiate the UI
    const ui = new UI();
    // Validate
    if (title === '' || author === '' || isbn === ''){
      //  Error alert
      ui.showAlert('Please fill in all fields', 'error');
    }
    else {
      // Notify user
      ui.showAlert('Book successfully added', 'success')
      // Add book to the list
      ui.addBookToList(book);
    }
    // Clear fields
    ui.clearFields();
    // Test log the form fields
    console.log(ui);

    e.preventDefault();
});


// Evenet listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  console.log(123);
  // Instantiate the UI
  const ui = new UI();
  // Delete target
  ui.deleteBook(e.target);


  e.preventDefault();
});
