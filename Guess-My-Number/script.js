'use strict';

document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let highScore;

const textManupilator = function (className, text) {
  document.querySelector('.' + className).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    textManupilator('message', '⛔ No number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    textManupilator('message', '⭐ Correct Number');
    textManupilator('number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      textManupilator('highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? textManupilator('message', '📈Too High!')
        : textManupilator('message', '📉 Too Low!');
      score--;
      textManupilator('score', score);
    } else {
      textManupilator('message', 'You lost the game!');
      textManupilator('score', 0);
    }
  }
});
//when guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //when guess is too highelse
//   if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  textManupilator('score', score);
  textManupilator('message', 'Start guessing...');
  textManupilator('number', '?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
