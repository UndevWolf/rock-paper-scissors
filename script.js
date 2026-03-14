console.log("Hellow");
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else if (computerChoice === 3) {
        return "scissors";
    }
}
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice dear human: ");
    return humanChoice.toLowerCase();
}
function playRound (human,computer) {
    if ((human === "rock" && computer === "scissors") || 
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")) {
        humanScore += 1;
        console.log(human, computer);
        console.log("youwin");
     }
    else if (human == computer) {
        console.log(human, computer);
        console.log("Tie");
    }
    else {
        computerScore += 1;
        console.log(human, computer);
        console.log("youlose");
    }
}
let humanScore = 0;
let computerScore = 0;





function playGame(rounds) {
    for (i = 0; i < rounds; i++) {
        let humanSelect = getHumanChoice();
        let computerSelect = getComputerChoice();
        playRound (humanSelect,computerSelect);
        console.log("Round " + (i+1))
        console.log(humanScore, computerScore);
    }
}

playGame(5);