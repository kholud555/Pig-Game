'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. display dice
  diceEl.classList.remove('hidden');
  // set att => findingElem.att = value;
  // diceEl.src = `dice-${dice}.png`;

  // setAttribute(att, value) == findingElem.att = value;
  diceEl.setAttribute('src', `dice-${dice}.png`);

  // 3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player

    switchPlayer();
  }
});

// hold button
btnHold.addEventListener('click', function () {
  // increase total score
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // switch to next player
  switchPlayer();
});

//Reset button
btnReset.addEventListener('click', function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  //reset score
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  //reset current score
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  // hide dice
  diceEl.classList.add('hidden');

  // start with first player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});