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
    humanChoice = prompt("Choose one element: ").toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win. Rock beats Scissors.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win. Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose. Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log('You lose. Rock beats Scissors.')
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win. Scissors beats Paper.")
    } else {
        console.log("It's a tie. try again!");
    }
}

const humanSelection = getComputerChoice();
const computerSelection = getHumanChoice();

playRound(humanSelection, computerSelection);