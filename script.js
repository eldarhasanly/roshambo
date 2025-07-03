let computerScore = 0;
let humanScore = 0;

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const computerScoreSpan = document.getElementById("computer-score");
const humanScoreSpan = document.getElementById("human-score");
const endMessage = document.getElementById("end-message");
const restartButton = document.getElementById("restart-button");

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
    const number = Math.ceil(Math.random() * 3);
    if (number === 1) return "rock";
    if (number === 2) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return;

    const winsAgainst = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winsAgainst[humanChoice] === computerChoice) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function updateScores() {
    humanScoreSpan.innerText = humanScore;
    computerScoreSpan.innerText = computerScore;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        endMessage.style.display = 'block';
        restartButton.style.display = 'block';

        if (humanScore === 5) {
            endMessage.textContent = "You won the game!";
        } else {
            endMessage.textContent = "Computer wins!";
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function handleClick(choice) {
    playRound(choice, getComputerChoice());
    updateScores();
    checkWinner();
}

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    updateScores();

    endMessage.style.display = 'none';
    restartButton.style.display = 'none';

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});