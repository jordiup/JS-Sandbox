// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults,200);

  e.preventDefault();
});

// Calculate results
function calculateResults(){
  console.log('Calculating...');

  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value); //  converts to float
  const calculatedInterest = parseFloat(interest.value) / 100 / 12; // does interest calculation
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2); // sets number of decimals on monthlypayment to 2
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.getElementById('results').style.display = 'block'; // Show spinner
    document.getElementById('loading').style.display = 'none'; // Hide loader

  } else { // if its not finite
    console.log('Error: numbers return infinite value..')
    showError('Please check your numbers');
  }

}

// Show error
function showError(error){
  document.getElementById('results').style.display = 'none'; // Show spinner
  document.getElementById('loading').style.display = 'none'; // Hide loader


  const errorDiv = document.createElement('div'); // creates a div
  const card = document.querySelector('.card'); // gets elemeents
  const heading = document.querySelector('.heading'); // gets elemeents

  errorDiv.className = 'alert alert-danger'; // adds bootstrap error styling to elelment
  errorDiv.appendChild(document.createTextNode(error)); // create text node and append to div
  card.insertBefore(errorDiv, heading); // insert error above heading

  setTimeout(clearError, 3000); // clears error after 3 seconds
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}
