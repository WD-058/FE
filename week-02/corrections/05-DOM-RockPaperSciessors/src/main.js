// Select the elements from the DOM
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");
const playButton = document.getElementById("play-button");
const selectionBtns = document.querySelectorAll("#selection button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Variables to keep track of the scores
let userScore = 0;
let computerScore = 0;
let userChoice = "";
let choices = ["rock", "paper", "scissors"];

selectionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selectChoice(e.target.id);
  });
});

playButton.addEventListener("click", playRound);

function selectChoice(choice) {
  userChoice = choice;
  selectionBtns.forEach((btn) => {
    if (btn.id === choice) {
      btn.classList.add("line-through");
    } else {
      btn.classList.remove("line-through");
    }
  });
}

function playRound() {
    console.log("Play button clicked");
    if(!userChoice) {
        alert("Please select a choice");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);

    // displaying the result
    resultElement.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result.message}`;

    if(result.winner === "user") {
        userScore++;
        userScoreElement.textContent = userScore;
    } else if(result.winner === "computer") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }

    // Reset the user choice

    userChoice = "";
    selectionBtns.forEach((btn) => {
        btn.classList.remove("line-through");
    })
}

function determineWinner(user, computer) {
    if(user === computer) {
        return { winner: "none", message: "It's a tie!" };
    } else if(user === "rock" && computer === "scissors" || 
              user === "paper" && computer === "rock" || 
              user === "scissors" && computer === "paper") {
        return { winner: "user", message: "You win!" };
    } else {
        return { winner: "computer", message: "Computer wins!" };
    }
}

