
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

    switch (randomNumber) {
        case 0:
        case 1:
        case 2:
            console.log("Rock");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Paper");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Scissors");
            break;
        default:
            getComputerChoice();
    };
};

getComputerChoice();