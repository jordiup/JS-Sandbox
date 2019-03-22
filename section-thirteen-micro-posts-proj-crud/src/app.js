import { http } from './http';
import { ui } from './ui';

// Base url
const base = 'http://localhost:3000/' ;

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get(base + 'posts')
  // .then(data => console.log(data))
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}
