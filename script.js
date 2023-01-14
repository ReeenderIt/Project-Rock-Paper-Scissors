
let x;

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