function getComputerChoice() {
    let choiceNum = Math.floor(Math.random()*3);

    if (choiceNum === 0) {
        return "rock";
    }
    else if (choiceNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    if (player === "rock"){
        if (computerSelection === "rock") {
            return 0;
        } 
        else if (computerSelection === "paper") {
            return -1; 
        }
        else {
            return 1;
        }
    }
    else if (player === "paper"){
        if (computerSelection === "rock") {
            return 1;
        }
        else if (computerSelection === "paper") {
            return 0;
        }
        else {
            return -1;
        }
    }
    else if (player === "scissors"){
        if (computerSelection === "rock") {
            return -1;
        }
        else if (computerSelection === "paper") {
            return 1;
        }
        else {
            return 0;
        }
    }
}

function chooseRPS(e) {
    const playerSelection = e.currentTarget.id;
    const computerSelection = getComputerChoice();
    let resultText = '';

    const result = playRound(playerSelection,computerSelection);

    if (result === 0) {
        resultText = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}
             vs ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}: It's a Tie!`;
    }
    else if (result === 1) {
        resultText = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}
             vs ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}: Player Wins!`;

        playerScore++;
    }
    else if (result === -1) {
        resultText = 
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}
             vs ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}: Computer Wins!`;

        computerScore++;
    }

    document.getElementById('score').textContent = 
        `${resultText} ${playerScore} vs ${computerScore}`;

    if (playerScore >= 3 || computerScore >= 3) {
        addVictoryText();
        pauseGame();
    }
}

function addVictoryText() {
    const victoryText = document.createElement('p');
    const scoreBox = document.querySelector("div#score-box");
    victoryText.classList.add('victory-text');

    if (playerScore >= 3) {
        victoryText.textContent = `Ultimate Victory!`;
    }
    else {
        victoryText.textContent = `Utter Defeat!`;
    }

    scoreBox.appendChild(victoryText);
    
}

function pauseGame() {
    buttons.forEach(button => button.removeEventListener('click', chooseRPS));

    const scoreBox = document.querySelector("div#score-box");
    const resetButton = document.createElement('button');

    resetButton.classList.add('reset');
    resetButton.textContent = 'Reset!';
    scoreBox.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(e) {
    console.log(e.target.className);
    playerScore = 0;
    computerScore = 0;
    document.getElementById('score').textContent = 
        `${playerScore} vs ${computerScore}`;
    
    const scoreBox = document.querySelector("div#score-box");
    const resetButton = document.querySelector('button.reset');
    const victoryText = document.querySelector('p.victory-text');
    scoreBox.removeChild(victoryText);
    scoreBox.removeChild(resetButton);

    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => button.addEventListener('click', chooseRPS));
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.game-button');
buttons.forEach(button => button.addEventListener('click', chooseRPS));