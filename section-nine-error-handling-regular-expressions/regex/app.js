let re;
// Regular expression literal is enclosed in two back slashes
re = /hello/;
reCaseInsensitive = /hello/i;

console.log(re);

console.log(re.source);

// exec() will return the result of an arra or null if no match. Also returns info about index and groups.
const result = re.exec('brad hello worldl');
console.log(result);

const result2 = re.exec('brad hel worldl');
console.log(result2);

console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() returns true or false if  a match
const result3 = re.test('Hello');
const result4 = reCaseInsensitive.test('HeLlO');
console.log(result3, result4);

// match() return result array or null
const str = 'hello there';
const result5 = str.match(re);
console.log(result5);

// search() returns an index of the first match and if not found returns -1
const str2 = '12345 hello there';
const result6 = str2.search(re);
console.log(result6);

// replace() will return a new string with some or all matches of a pattern
const str3 = 'hello there bro!';
const newstr = str3.replace(re, 'hi');
console.log(newstr);
