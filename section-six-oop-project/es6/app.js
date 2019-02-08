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

// Local storage class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;
      // Add book to UI
      ui.addBookToList(book);

    });
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    // add book
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    console.log(isbn);
    const books = Store.getBooks();

    books.forEach( function(book, index){
      // tricky work around for extracting isbn from barcode string
      if(isbn.includes('('+book.isbn+')')){
        books.splice(index,1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

}


// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
      // Add book to LS
      Store.addBook(book);
    }
    // Clear fields
    ui.clearFields();
    // Test log the form fields
    console.log(ui);

    e.preventDefault();
});


// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate the UI
  const ui = new UI();
  // Delete target
  ui.deleteBook(e.target);
  // Remove from LS, based on ISBN
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // if (localStorage. )

  e.preventDefault();
});
