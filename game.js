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
    //console.log(player);
    //console.log(computerSelection);

    if (player === "rock"){
        if (computerSelection === "rock") {
            console.log("Rock vs Rock: It's a Tie!");
            return 0;
        } 
        else if (computerSelection === "paper") {
            console.log("Rock vs Paper: Computer Wins!");
            return -1; 
        }
        else {
            console.log("Rock vs Scissors: Human Wins!");
            return 1;
        }
    }
    else if (player === "paper"){
        if (computerSelection === "rock") {
            console.log("Paper vs Rock: Human Wins!");
            return 1;
        }
        else if (computerSelection === "paper") {
            console.log("Paper vs Paper: It's a Tie!");
            return 0;
        }
        else {
            console.log("Paper vs Scissors: Computer Wins!");
            return -1;
        }
    }
    else if (player === "scissors"){
        if (computerSelection === "rock") {
            console.log("Scissors vs Rock: Computer Wins!");
            return -1;
        }
        else if (computerSelection === "paper") {
            console.log("Scissors vs Paper: Human Wins!");
            return 1;
        }
        else {
            console.log("Scissors vs Scissors: It's a Tie");
            return 0;
        }
    }
}

function logTest() {
    console.log("Clicked Here!");
}

function chooseRPS(e) {
    const playerSelection = e.currentTarget.id;
    const computerSelection = getComputerChoice();
    let resultText = '';
    console.log(playerSelection);
    const result = playRound(playerSelection,computerSelection);

    if (result === 0) {
        resultText = "It's a Tie!"
    }
    else if (result === 1) {
        resultText = "Human Wins!";
        playerScore++;
    }
    else if (result === -1) {
        resultText = "Computer Wins!";
        computerScore++;
    }

    document.getElementById('score').textContent = 
        `${resultText}: ${playerScore} vs ${computerScore}`;

    if (playerScore >= 3 || computerScore >= 3) {
        pauseGame();
    }
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
    scoreBox.removeChild(resetButton);

    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => button.addEventListener('click', chooseRPS));
}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.game-button');
buttons.forEach(button => button.addEventListener('click', chooseRPS));