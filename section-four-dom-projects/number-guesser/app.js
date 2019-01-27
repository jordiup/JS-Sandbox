/*
  GAME FUNCTION:
  - Player must guess a number between a min and a max
  - Player gets a certain amount of guesses
  - Notify players of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    // winningNum = Random.integer(),
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess > max || guess < min){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum){
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    gameOver(true, `Correct! the winning number is ${winningNum}`);
  } else {
      // Wrong number
      guessesLeft -= 1 ;
      if(guessesLeft === 0){
        // Game over
        gameOver(false, `You lose 😢, the correct number was ${winningNum}`);
      } else {
        // Game continues - answer wrong
        setMessage(`${guess} is not correct, you have ${guessesLeft} guessesLeft`, 'orange');
        // Clear input
        guessInput.value = '';
      }
  }


});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  guessInput.style.color = color;
  setMessage(msg, color);
}


// Set message
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}
