const http = new easyHTTP;

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err,post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
//
// // Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err,posts){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create a post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err,post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update (PUT) a post
http.put('https://jsonplaceholder.typicode.com/posts/7', data, function(err,post){
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update Post
// http.put()


// Delete a psot
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err,response){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
