// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// Quote api
document.addEventListener('DOMContentLoaded', getQuote());


function validateName(){
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
    name.removeAttribute('style');
  } else {
    name.classList.remove('is-invalid');
    name.setAttribute('style', 'border-left: #0dc14357 solid 0.5rem');
  }
}

function validateZip(){
  const zip = document.getElementById('zip');
  const re = /^[0-9]{4}$/;

  console.log(zip.value);

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
    zip.removeAttribute('style');

  } else {
    zip.classList.remove('is-invalid');
    zip.setAttribute('style', 'border-left: #0dc14357 solid 0.5rem');
  }
}

function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
    email.removeAttribute('style');
  } else {
    email.classList.remove('is-invalid');
    email.setAttribute('style', 'border-left: #0dc14357 solid 0.5rem');
  }
}

function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^[0-9]{9,11}$/;

  console.log(re.exec(phone.value));

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
    phone.removeAttribute('style');
  } else {
    phone.classList.remove('is-invalid');
    phone.setAttribute('style', 'border-left: #0dc14357 solid 0.5rem');
  }
}

function getQuote(){
  console.log('working');
  // const quote = document.getElementById('quote');
  // quote.innerHTML = 'cat';
  //
  // const response = fetch(`https://quotes.rest/qod.json?category=inspire`);
  //
  // console.log(response);

  fetch('https://quotes.rest/qod')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data.contents.quotes[0].quote);
      let output = data.contents.quotes[0].quote;
      // output += '<p><i>Data fetched from </i> 🌞</p>'
      const quote = document.getElementById('quote');
      quote.innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });

}
