
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
  re = /gre?a?\y/i;  // ? optional charcter 


// String to match
const str = 'Hello World';

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
