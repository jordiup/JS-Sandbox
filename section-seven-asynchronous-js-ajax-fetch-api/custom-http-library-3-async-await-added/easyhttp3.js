/*
  @version 2.0.0
  @author Jordi Hermoso
  @license MIT
*/

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  // Make a HTTP POST Requests
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

}

const http = new EasyHTTP;
