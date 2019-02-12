const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'},
];
//
// function createPost(post){
//   // Mimick server response time with setTimeout callback function
//   setTimeout(function(){
//     posts.push(post);
//   },2000);
// }
//
// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}: ${post.body}</li>`;
//   });
//   document.body.innerHTML += output;
// }, 1000);
// }
//
// createPost(  {title: 'Post three', body: 'This is post three'});
//
// getPosts();


// ajax way...
function createPost(post, callback){
  // Mimick server response time with setTimeout callback function
  setTimeout(function(){
    posts.push(post);
    callback();
  },2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}: ${post.body}</li>`;
  });
  document.body.innerHTML += output;
}, 1000);
}

createPost(  {title: 'Post three', body: 'This is post three'}, getPosts);

getPosts();
