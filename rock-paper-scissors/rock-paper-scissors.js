


function getComputerChoice() {
    let randomNum = Math.random() * 1;

    if (randomNum <= .33) {
        return "rock"; 
    }
    else if (randomNum <= .66) {
        return "paper";
    }
    else if (randomNum <= .99) {
        return "scissors";   
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please pick rock, paper, or scissors: ");

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It is a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats rock! You lose!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats scissors! You win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats paper! You lose!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock! You win!") 
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats scissors! You lose!"); 
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper! You win!");
        humanScore++;
    }
}

