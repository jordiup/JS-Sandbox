# Notes

Asynchronous programming describes the asynchronous loading of

AJAX and the fetch API are used for making http requests to files API's and services. AJAX, XML and the HTTP request object are quite old, but reliable. Fetch is a new standard - we will work with both.

Async technologies:
 - xmlhttprequest & fetch
 - jQuery Ajax, Axios, other HTTP libraries
 - Node.js (filesystem) module

Async code can be achieved by working with callbacks, promises, or async/await.

## AJAX
- AJAX, stands for Asynchronous JavaScript and XML. Though XML is rarely used anymore, rather JSON is far more prevalent.
- It is a set of web technologies that send & receive data asynchronously
- It does not interfere with the current page

## Rest APIs and HTTP Requests
So far we've look at how to fetch data from a local file, json files, and external APIs and now we'll be looking REST APIs.

API stands for Application Programming Interface. Many devices have different types of APIS.

Very general; but essentially a contract provided by one piece of software to another. Usually consists of a structured request and a structures response.

## REST
- Representational State Transfer
- Relies on a stateless client-server communication protocol (almost always HTPP)
- Treats objects on the server side as resources that can be created, updated, read or destroyed
- Objects could be a blog post, a user etc. They're usually stored in a database.
- We can create with a POST request, delete with a DELETE request, also can PUT, HEAD, OPTIONS, PATCH etc.
- Because REST operates with just HTTP requests and usually some standard like JSON it can be used in a variety of languages

## Callback functions
We've dealt with callback functions quite a bit already. They are functions that are parsed in as a parameter to another function and runs within it. This helps to prevent variables being returned before being caught. Callbacks make returns asynchronous.


## ES6 Promises
Part of the es6 standard, an alternative to callbacks. While they're handling asynchronous operations they can promise to do something when complete. We handle a promise response with a '.then' i.e. 'someFunction.then()'.

## Async await
Actually an es7 (2016) standard, implemented in Google Chrome browser.



<!-- ##  -->
