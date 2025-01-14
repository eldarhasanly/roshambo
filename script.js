let computerChoiceNumber;
let computerChoice;
let computerScore = 0;
let humanChoice ;
let humanScore = 0;

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
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper or Scissors:").toLowerCase();

    return humanChoice;
}

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
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`You won the game. ${humanScore}:${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. ${computerScore}:${humanScore}`)
    } else {
        console.log(`The game ended in a draw. ${humanScore}:${computerScore}`)
    }
}

playGame();