
let re;
// Literal characters
re = /hello/i;
re = /hello/;


// Metacharacter symbols
  re = /^h/i;       // ^  must start with
  re = /orld$/i;    // $  must end with
  re = /^hello$/i;  // both
  re = /h.llo/i;    // . matches any ONE character
  re = /h*llo/i;    // * matches any character 0 or more
  re = /gre?a?y/i;  // ? optional charcter
  re = /gre?a?\y/i; // \ escaped char


// Brackets [] - character sets
  re = /gr[ae]y/i;   // must be a or e
  re = /[GF]ray/i;   // must be G or F
  re = /[^GF]ray/i;   // matches anything BUT G or F
  re = /^[GF]ray/i;   // must start with G or F (not to be confused with above)
  re = /[A-Z]ray/i;   // match any upper case letter
  re = /[a-z]ray/i;   // match any lower case letter
  re = /[A-Za-z]ray/i;   // match any letter
  re = /[0-9]ray/i;   // match any digit

// Braces {} - Quantifiers
  re = /Hel{2}o/;     // must occur exactly {n} times
  re = /Hel{2,4}o/;   // must occur exactly {n-m} times
  re = /Hel{2,}o/;   // must occur at least {n} times


// Parenthesis () - Grouping
re = /([0-9]x){3}/;  // (number x) 3 times 


// String to match
let str = 'Hello World';
str = 'gray';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re,str);
