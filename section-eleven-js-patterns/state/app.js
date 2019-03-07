const PageState = function(){
  let currentState = new homeState();

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }
};

// Home state
const homeState = function(page){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">State Pattern</h1>
    <p class="lead">Try clicking the drop down menu to change the page's state.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;

};

// About state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};


// Contact state
const contactState = function(page){
  document.querySelector('#heading').textContent = 'Contact';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email addres</label>
        <input type="email" class="form-control">
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  `;
};


// Instantiate page state
const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// Home
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});
