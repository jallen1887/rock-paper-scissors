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
    console.log(player);
    console.log(computerSelection);

    if (player === "rock"){
        if (computerSelection === "rock") console.log("Rock vs Rock: It's a Tie!");
        else if (computerSelection === "paper") console.log("Rock vs Paper: Computer Wins!");
        else console.log("Rock vs Scissors: Human Wins!");
    }
    else if (player === "paper"){
        if (computerSelection === "rock") console.log("Paper vs Rock: Human Wins!");
        else if (computerSelection === "paper") console.log("Paper vs Paper: It's a Tie!");
        else console.log("Paper vs Scissors: Computer Wins!");
    }
    else if (player === "scissors"){
        if (computerSelection === "rock") console.log("Scissors vs Rock: Computer Wins!");
        else if (computerSelection === "paper") console.log("Scissors vs Paper: Human Wins!");
        else console.log("Scissors vs Scissors: It's a Tie");
    }
}
const playerSelection = "SCISSORS";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);