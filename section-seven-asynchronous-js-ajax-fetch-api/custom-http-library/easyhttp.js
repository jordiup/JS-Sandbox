// We'll be building a custom AJAX library


function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Reqest
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  // Note that you cannot use 'this' within a sub-method, you could use an arrow function, or make a temp variable
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}

// Make an HTTP POST Reqest
easyHTTP.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Reqest
easyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function(){
    callback(null,self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE Reqest
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null,'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send();
}
