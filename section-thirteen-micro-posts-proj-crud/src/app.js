import { http } from './http';
import { ui } from './ui';

// Base url generated from json api 'npm run json:server'
const base = 'http://localhost:3000/' ;

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click',deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click',enableEdit);

function getPosts() {
  http.get(base + 'posts')
  // .then(data => console.log(data))
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// Submit post
function submitPost(){
  // Gets values from form, and uses HTTP module to make a request
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  if(title === '' || body === ''){
    showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
      const data = {
        id,
        title,
        body
      };

      // Fill form with current post
      ui.fillForm(data);

      // Create Post
      http.post(base + 'posts', data)
        .then(data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }

  function deletePost(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete')){
      const id = e.target.parentElement.dataset.id;

      if(confirm('Are you sure?')){
        http.delete(base + id)
          .then(data => {
            ui.showAlert('Post removed', 'alert alert-success');
            getPosts();
          })
          .catch(err => console.log(err));
      }
    }
  }

// Enable edit state
function enableEdit(e){

    if(e.target.parentElement.classList.contains('edit')){
      const id = e.target.parentElement.dataset.id;
      const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
      const body = e.target.parentElement.previousElementSibling.textContent;

      const data = {
        id,
        title,
        body
      }
      ui.fillForm(data);
    }

    e.preventDefault();
  }
