
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

    console.log(randomNumber);

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
            getComputerChoice();
    };

    return choice;
};


function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "Rock" && computerSelection === "Scissors") || 
        (playerSelection == "Scissors" && computerSelection === "Paper") || 
        (playerSelection == "Paper" && computerSelection === "Rock")) {
        
        console.log(playerSelection);
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

    } else if ((playerSelection == "Rock" && computerSelection === "Paper") || 
               (playerSelection == "Scissors" && computerSelection === "Rock") || 
               (playerSelection == "Paper" && computerSelection === "Scissors")) {
        
        console.log(playerSelection);
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

    } else if ((playerSelection == "Rock" && computerSelection === "Rock") || 
               (playerSelection == "Scissors" && computerSelection === "Scissors") || 
               (playerSelection == "Paper" && computerSelection === "Paper")) {
        
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(`It's a Tie!`);

    };
};


