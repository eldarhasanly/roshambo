let computerChoiceNumber;
let computerChoice;
let computerScore = 0;
let humanScore = 0;
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = '♫';
    } else {
        music.play();
        toggleBtn.textContent = '♬';
    }
    isPlaying = !isPlaying;
});

function getComputerChoice() {
    computerChoiceNumber = Math.ceil(Math.random()*3);

    if (computerChoiceNumber === 1) {
        computerChoice = "rock";
    } else if (computerChoiceNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
};

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats Rock.");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win. Rock beats Scissors.");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win. Paper beats Rock.");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose. Scissors beats Paper.");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log('You lose. Rock beats Scissors.');
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win. Scissors beats Paper.");
        humanScore += 1;
    } else {
        console.log("It's a tie. try again!");
    }
};

function playGame() {
    if (humanScore > computerScore) {
        console.log(`You won the game. ${humanScore}:${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. ${computerScore}:${humanScore}`)
    } else {
        console.log(`The game ended in a draw. ${humanScore}:${computerScore}`)
    }
};