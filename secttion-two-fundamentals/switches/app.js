/*
  Working with switches.

  Switches can be better utilized rather than using many else if, else ifs.
*/

const color = 'red';

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue')
    break;
}

switch (new Date().getDay()){
  case 0:
    day = 'Sun';
    break;
  case 1:
    day = 'Mon';
    break;
  case 2:
    day = 'Tue';
    break;
  case 3:
    day = 'Wed';
    break;
  case 4:
    day = 'Thur';
    break;
}

console.log(`Today is ${day}`)

// Output
// console.log(val);
// console.log(typeof val);
