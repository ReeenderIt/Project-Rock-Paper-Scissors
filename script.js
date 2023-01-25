function verify(playerInput) {

    const inputLowercased = playerInput.toLowerCase();

    if (inputLowercased === "rock" || 
        inputLowercased === "scissors" || 
        inputLowercased === "paper") {
            
            return inputLowercased;

    } else {
        alert("Please enter Rock, Paper, or Scissors.");
        location.reload();
    };
};


function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 10);

    let choice;
    
    switch (randomNumber) {
        case 0:
        case 1:
        case 2:
            choice = "rock";
            break;
        case 3:
        case 4:
        case 5:
            choice = "paper";
            break;
        case 6:
        case 7:
        case 8:
            choice = "scissors";
            break;
        default:
            return getComputerChoice(); // recursion needs return if you want it to return a value
    };

    return choice;
};


function playRound(playerSelection, computerSelection) {

    const result = ["Winner","resultStatement"];

    if ((playerSelection == "rock" && computerSelection === "scissors") || 
        (playerSelection == "scissors" && computerSelection === "paper") || 
        (playerSelection == "paper" && computerSelection === "rock")) {

        result[0] = "Player";
        result[1] = `You Win! ${playerSelection} beats ${computerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection === "paper") || 
               (playerSelection == "scissors" && computerSelection === "rock") || 
               (playerSelection == "paper" && computerSelection === "scissors")) {
        
                result[0] = "Computer";
                result[1] = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection === "rock") || 
               (playerSelection == "scissors" && computerSelection === "scissors") || 
               (playerSelection == "paper" && computerSelection === "paper")) {

                result[0] = "Tie";
                result[1] = `It's a Tie!`;
    };

    return result;
};


function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        const playerPrompt = prompt("Rock, Paper, or Scissors?", ""); 
        const playerSelection = verify(playerPrompt);
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        const winner = result[0];
        const resultStatement = result[1];
        
        if (winner === "Player") {
            playerScore++;
            console.log(resultStatement);
        } else if (winner === "Computer") {
            computerScore++;
            console.log(resultStatement);
        } else if (winner === "Tie") {
            console.log(resultStatement);
        }; 
    };

    if (playerScore > computerScore) {
        console.log(`You are the ultimate winner!`);
    } else {
        console.log(`Computer is the ultimate winner!`);
    };
};


game();