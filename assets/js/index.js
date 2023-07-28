let diceButton = document.querySelector('button');

diceButton.addEventListener('click', function () {
  rollDiceButton();
});

function rollDiceButton() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = './assets/images/dice' + randomNumber1 + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage2 = './assets/images/dice' + randomNumber2 + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🕺Player 1 Wins!';
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!🕺';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}
