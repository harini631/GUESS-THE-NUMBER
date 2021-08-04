'use strict';

// console.log(document.querySelector('.message').textContent);
// // if id we would use #message sice it is calss we use
// // .message
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 24;

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretnumber;
const dispmsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //when no i/p
  if (!guess) {
    dispmsg('no number🤗');
  }
  //when wrong i/p
  else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'Too High...📈' : 'Too Low...📉';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'brown';
    } else {
      document.querySelector('.message').textContent = 'you lost the game😢';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when i/p is correct
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER🤗';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '20rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  dispmsg('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '16rem';
  document.querySelector('body').style.backgroundColor = 'black';
});
