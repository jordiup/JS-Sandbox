/*
  Working with template literals
*/

const firstName = 'Jordi';
const lastName = 'Hermoso';
const age = 20;
const job1 = 'Software Developer';
const job2 = 'CS Student';
const city = 'Perth 📌';

let html;

// without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city + '</li></ul>';

// with template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    <li>Favourite animal: ${faveAnimal()}
    <li>City: ${city}</li>
  </ul>
`;

function faveAnimal(){
  return '🐟';
}


document.body.innerHTML = html;



// Output
// console.log(val);
// console.log(typeof val);
