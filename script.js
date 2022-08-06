'use strict';

let score = 20;
const check = document.querySelector('.check');
const labelScore = document.querySelector('.label-score');
const number = document.querySelector('.number');
let randomNumber = Math.floor(Math.random() * 20) + 1;
const body = document.body;
const message = document.querySelector('.message');

let highScore = 0;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number 🚫';
  } else if (guess === randomNumber) {
    message.textContent = 'Correct guess 🎉';
    body.style.backgroundColor = ' #60b347';
    number.textContent = randomNumber;
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
        message.textContent = guess > randomNumber ? 'Too high 📈' : 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
 
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  message.textContent = 'Start guessing....';
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  console.log(randomNumber);
});
