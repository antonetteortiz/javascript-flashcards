let startButton = document.getElementById("startGame");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let restartButton = document.getElementById("restartbutton");
let correctButtons = document.querySelectorAll(".correctButton");
let wrongButtons = document.querySelectorAll(".wrongButton");
let board = document.querySelector(".mainboard");
let cards = document.querySelectorAll(".cards");
let correctScore = document.querySelector(".correctScore");
let wrongScore = document.querySelector(".wrongScore");
let correct = 0;
let wrong = 0;

//Hide the cards and restart button
restartButton.style.display = "none";

//start game and display cards
startButton.addEventListener("click", (evt) => {
  board.classList.add("show");
  flashCardDisplay(restartButton, "block");
  flashCardDisplay(startButton, "none");
});

//Hide start button
function flashCardDisplay(card, displayToggle) {
  card.style.display = displayToggle;
}

//L
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    correctButtons[i].classList.add("showButtons");
    wrongButtons[i].classList.add("showButtons");
  });

  correctButtons[i].addEventListener("click", () => {
    correct++;
    correctScore.innerText = correct;
    cards[i].classList.add("hidden");
  });

  wrongButtons[i].addEventListener("click", () => {
    wrong++;
    wrongScore.innerText = wrong;
    cards[i].classList.add("hidden");
  });
}

function clickCard(selectCard, content) {
selectCard.addEventListener("click", (evt) => {

displayQuestion(selectCard, content);
});
}

// Restart Button
function displayQuestion(cardNumber, content) {
  cardNumber.innerHTML = content;

}

restartbutton.addEventListener("click", (evt) => {
  for (let i = 0; i < cards.length; i++) {
  cards[i].classList.remove("hidden")
  cards[i].classList.add("show") 
  correctButtons[i].classList.remove("showButtons");
  wrongButtons[i].classList.remove("showButtons");
  
  }
  // displayQuestion(card1, "Is javascript case sensitive?");
  // displayQuestion(card2,"If a variable is not a function and does not have var then it is?");
  // displayQuestion(card3, "Who invented javascript?");
  // displayQuestion(card4, "What is a javascript package manager");
  // displayQuestion(card5, "Which tool can you use to ensure code quality?");
  // displayQuestion(card6,"Is JavaScript a front-end, back-end, or full-stack programming language?");
  // displayQuestion(card7, "Are JavaScript and Java the same?");
  // displayQuestion(card8, "What other names have javascript been released under?");
  // displayQuestion(card9, "What is a scope?");
});
