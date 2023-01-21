
let x;

// Generate random number from 0 - 9
// Divide the numbers to sets: [0, 1, 2], [3, 4, 5], [6, 5, 7]
// Assign sets to the outcome:
// [0, 1, 2] - Rock
// [3, 4, 5] - Paper
// [6, 7, 8] - Scissors
// The number generated will select the outcome
// If number generated is 9, run the code again

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);

    let choice;
    
    switch (randomNumber) {
        case 0:
        case 1:
        case 2:
            choice = "Rock";
            break;
        case 3:
        case 4:
        case 5:
            choice = "Paper";
            break;
        case 6:
        case 7:
        case 8:
            choice = "Scissors";
            break;
        default:
            return getComputerChoice(); // recursion needs return if you want it to return a value
    };

    return choice;
};


// Game's Rules
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If player chooses Rock and computer chooses Scissors or 
// player chooses Scissors and computer chooses Paper or
// player chooses Paper and computer chooses Rock,
// the player wins
// If player chooses Rock and computer chooses Paper or 
// player chooses Scissors and computer chooses Rock or
// player chooses Paper and computer chooses Scissors,
// the player lose
// If they choose the same, it's a tie

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection === "Scissors") || 
        (playerSelection == "scissors" && computerSelection === "Paper") || 
        (playerSelection == "paper" && computerSelection === "Rock")) {

        console.log(`You chose ${playerSelection}.`);
        console.log(`Computer chose ${computerSelection}.`);
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);

    } else if ((playerSelection == "rock" && computerSelection === "Paper") || 
               (playerSelection == "scissors" && computerSelection === "Rock") || 
               (playerSelection == "paper" && computerSelection === "Scissors")) {
        
        console.log(`You chose ${playerSelection}.`);
        console.log(`Computer chose ${computerSelection}.`);
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);

    } else if ((playerSelection == "rock" && computerSelection === "Rock") || 
               (playerSelection == "scissors" && computerSelection === "Scissors") || 
               (playerSelection == "paper" && computerSelection === "Paper")) {
        
        console.log(`You chose ${playerSelection}.`);
        console.log(`Computer chose ${computerSelection}.`);
        console.log(`It's a Tie!`);

    };
};

let computerSelection = getComputerChoice();
let playerSelection = "Scissors";

playRound(playerSelection, computerSelection);

