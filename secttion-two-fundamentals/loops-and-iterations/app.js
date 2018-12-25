/*
  Loops and iterations

*/

// FOR LOOP
for (let i = 0; i < 10; i++){
  console.log('number ' + i);
  if (i === 2){
    console.log('2 is my favourity number');
  }
  if (i === 5){
    console.log('loop stopped')
    break;
  }
}

// WHILE LOOP
let i = 0;
while (i < 5){
  console.log('number ' + i);
  i++;
}

// DO WHILE LOOP
let j = 0;
do {
  console.log('number ' + j);
  j++;
}
while (j < 3);


// ARRAY FORLOOP
const cars = ['1🚗','2🚙','3🚚'];
for (let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}


// ARRAY FOR EACH
cars.forEach(function(car){
  console.log(car);
});


// MAP - used to return a different array
const users = [
  {id:1, name:'John'},
  {id:2, name:'Jim'},
  {id:3, name:'Jordi'},
  {id:4, name:'Jeremy'},
];

const ids = users.map(function(user){
  return user.name + 'New';
});

console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'jordi',
  lastName: 'hermoso',
  age: 20,
}
for (let x in user){
  console.log(`${user[x]}`);
}
