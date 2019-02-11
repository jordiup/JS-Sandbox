document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;

  // Log of input number
  console.log(number);

  const xhr = new XMLHttpRequest();

  // Used to access the api, parsing through the number variable
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if (response.type === 'success'){
        // Note that we must use .value since response is an object and you need to access the child values
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
