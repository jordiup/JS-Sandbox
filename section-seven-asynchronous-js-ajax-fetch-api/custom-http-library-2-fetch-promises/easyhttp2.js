/*
  @version 2.0.0
  @author Jordi Hermoso
  @license MIT
*/

class EasyHTTP {
  // Make an HTTP GET Request
  get(url){
    // resolve when we're sendinga  response, reject when rejecting an error
    return new Promise((resolve,reject) => {

    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    });
  }
  // Make a HTTP POST Requests
  post(url, data) {
    return new Promise((resolve,reject) => {

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    });
  }

  // PUT Request
  put(url, data) {
    return new Promise((resolve,reject) => {

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    });
  }

  // DELETE Request
  delete(url) {
    return new Promise((resolve,reject) => {

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => resolve('Resource deleted...'))
      .catch(err => console.log(err));
    });
  }

}

const http = new EasyHTTP;
