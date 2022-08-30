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

function game() {
    let result = 0;
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            humanScore++;
            console.log(`${humanScore} vs ${computerScore}`);
        }
        else if (result === -1) {
            computerScore++;
            console.log(`${humanScore} vs ${computerScore}`);
        }
        else {
            i--;
            console.log(`${humanScore} vs ${computerScore}`);
        }
    }
}
const playerSelection = "SCISSORS";

game();