let plyerSel = '';
let playerPoints = 0;
let computerPoints = 0;
const bestOf = 5;
const buttons = document.getElementsByClassName('buttonSel');
const button = document.createElement('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const resultPara = document.getElementById('resultPara');
const winner = document.getElementById('winner');


// function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 10);
//     let choice;
//     switch (randomNumber) {
//         case 0:
//         case 1:
//         case 2:
//             choice = "rock";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             choice = "paper";
//             break;
//         case 6:
//         case 7:
//         case 8:
//             choice = "scissors";
//             break;
//         default:
//             return getComputerChoice(); // recursion needs return to return a value
//     };
//     return choice;
// };


function getCompChoice() {
    const randomNum = Math.floor(Math.random() * 10);
    function isRock () { return 'rock' };
    function isPaper () { return 'paper' };
    function isScissors () { return 'scissors' };
    let choices = {
        '0':isRock,
        '1':isRock,
        '2':isRock,
        '3':isPaper,
        '4':isPaper,
        '5':isPaper,
        '6':isScissors,
        '7':isScissors,
        '8':isScissors,
        '9':() => {return getCompChoice()},
    };
    return choices[randomNum](); 
};


function playRound() {
    const compSel = getCompChoice();
    if ((plyerSel === "rock" && compSel === "scissors") || 
        (plyerSel === "scissors" && compSel === "paper") || 
        (plyerSel === "paper" && compSel === "rock")) {
        return `You Won!`;
    }; 
    if ((plyerSel === "rock" && compSel === "paper") || 
        (plyerSel === "scissors" && compSel === "rock") || 
        (plyerSel === "paper" && compSel === "scissors")) {
        return `Computer Won!`;
    }; 
    return `Tie!`;
};


function getScore(result) {
    if (result.includes('You')) {
        playerPoints++;
        playerScore.textContent = playerPoints;
    };
    if (result.includes('Computer')) {
        computerPoints++;
        computerScore.textContent = computerPoints;
    };
    resultPara.textContent = result;
};


function getWinner() {
    button.textContent = 'Play Again';
    if (playerPoints === bestOf) {
        winner.textContent = `VICTORY!`;
        for (let btn of buttons) {btn.style.display = 'none'};
        document.body.appendChild(button);
    } else if (computerPoints === bestOf) {
        winner.textContent = `You lose to a Computer!`;
        for (let btn of buttons) {btn.style.display = 'none'};
        document.body.appendChild(button);
    };
};


function playAgain() {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = '';
    computerScore.textContent = '';
    resultPara.textContent = '';
    winner.textContent = '';
    for (let btn of buttons) {btn.style.display = 'initial'};
    button.remove();
};


function game() {
    getWinner(getScore(playRound()));
};

rock.addEventListener('click', function() {
    plyerSel = 'rock';
    game()
});

paper.addEventListener('click', function() {
    plyerSel = 'paper';
    game()
});

scissors.addEventListener('click', function() {
    plyerSel = 'scissors';
    game()
});

button.addEventListener('click', playAgain);