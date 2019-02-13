const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'},
];


function createPost(post){
  // In promise() you pass in a function with resolve and reject as parameters
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      setTimeout(function(){
        posts.push(post);

        const error = true;
        if(!error){
          // where there would be callback() use resolve
          resolve();
        } else {
          // Anything rejected is passed onto the .catch at bottom
          reject('something went wrong!');
        }
      },2000);

    })
  });

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

createPost(  {title: 'Post three', body: 'This is post three'}).then(getPosts).catch(function(){
  console.log(error);
});

getPosts();
