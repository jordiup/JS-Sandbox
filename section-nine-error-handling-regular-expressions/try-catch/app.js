// Variables for use in try-catch
const user = {email: 'jdoe@gmail.com'};

try {
  // Produces a ReferenceError, since the function isn't declared
  // myFunction();

  // Produces a type error
  // null.myFunction();

  // Will produce a syntax error
  // eval('Hello World');

  // URI Error
  // decodeURIComponent('%');

  // Throws 'User has no name'
  // if(!user.name) {
  //   throw new SyntaxError('User has no name');
  // }

} catch (e) {
  // Logging the error (name and message)
  console.log(e);
  // You can also log just the error message
  console.log(e.message);
  // Logging name and type...
  console.log(e.name, e.type);
  // Testing error type
  console.log(e instanceof TypeError);
  console.log(e instanceof ReferenceError);
} finally {
  // Finally can be added to try/catch to run regardless of result
  console.log('finally (I will always run)');
}

console.log('program continues..');
