// In this video we'll still be using ajax and xhr, but also JSON.

document.getElementById('button1').addEventListener('click',loadCustomer);

document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(e) {
  console.log('button 1 clicked');

  const xhr = new XMLHttpRequest();

  console.log('READYSTATE', xhr.readyState);

  xhr.open('GET','customer.json', true);

  xhr.onload = function(){
    console.log(this.responseText);

    if(this.status === 200) {

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer[0].id}</li>
        <li>Name: ${customer[0].name}</li>
        <li>Company: ${customer[0].company}</li>
        <li>📞: ${customer[0].phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;

    }
  }
  xhr.send();
}


function loadCustomers(e) {
  console.log('button 2 clicked');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    console.log(this.responseText);

    if(this.status === 200) {

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>📞: ${customer.phone}</li>
        </ul>
        `;
      });


      document.getElementById('customers').innerHTML = output;

    }
  }
  xhr.send();
}
