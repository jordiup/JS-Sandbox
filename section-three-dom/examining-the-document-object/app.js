/*
  Taking a look at the document object.
*/

let val;

val = document;
val = document.all;
val = document.all[2]; // accessing a certain index similar to array
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.URL;
val = document.charset;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[0];

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script);
});


console.log(val);
