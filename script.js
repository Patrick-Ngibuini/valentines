// Get elements
const startScreen = document.getElementById('start-screen');
const valentineScreen = document.getElementById('valentine-screen');
const gridScreen = document.getElementById('grid-screen');
const startButton = document.getElementById('start-button');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const responseText = document.getElementById('response-text');
const clickMeButton = document.getElementById('click-me-button');
const letterScreen = document.getElementById('letter-screen');

// Array of possible messages
const messages = [
  "Are you sure?",
  "You will regret that!",
  "Think again!",
  "Really?",
  "Don't do it!",
  "I'm sad now :(",
  "Try clicking Yes instead!",
  "Why are you like this?",
  "Click Yes, you know you want to!",
  "Nope, not this time!"
];

// Start button click event
startButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  valentineScreen.classList.remove('hidden');
});

// No button hover event
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  responseText.textContent = randomMessage;
  responseText.classList.remove('hidden');
});

// Yes button click event
yesButton.addEventListener('click', () => {
  valentineScreen.classList.add('hidden');
  gridScreen.classList.remove('hidden');
});

// "Click Me!" button click event
clickMeButton.addEventListener('click', () => {
  gridScreen.classList.add('hidden');
  letterScreen.classList.remove('hidden');
});