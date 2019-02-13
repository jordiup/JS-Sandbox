document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get local JSON data
function getJSON() {
  fetch('customer.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(customer) {
        output += `<li>${customer.name}, ${customer.company}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get external data
function getExternal(){
  fetch('http://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      output += '<p><i>Data fetched from api.github.com</i> 🌞</p>'
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });

}
