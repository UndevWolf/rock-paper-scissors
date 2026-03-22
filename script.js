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
function playRound (human,computer) {
    if ((human === "rock" && computer === "scissors") || 
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")) {
        humanScore += 1;
        console.log("Human: " + human + " vs " + "Computer: " + computer);
        matchResult.textContent = "You Win";
     }
    else if (human == computer) {
        console.log("Human: " + human + " vs " + "Computer: " + computer);
        matchResult.textContent = "Tie";
    }
    else {
        computerScore += 1;
        console.log("Human: " + human + " vs " + "Computer: " + computer);
        matchResult.textContent = "You Lose.";
    }
}
let humanScore = 0;
let computerScore = 0;





// function playGame(rounds) {
//     for (i = 0; i < rounds; i++) {
//         console.log("Round " + (i+1))
//         let humanSelect = getHumanChoice();
//         let computerSelect = getComputerChoice();
//         playRound (humanSelect,computerSelect);
//         console.log(humanScore, computerScore);
//     }
//     console.log("Good Game.")
// }

const choiceButton = document.querySelectorAll(".choiceButton");
const scores = document.querySelector("#scores");
const matchResult = document.querySelector("#result");

choiceButton.forEach(choice => choice.addEventListener("click", (e) => {
    let human = "";
    switch (e.target.value) {
        case "rock":
            human = e.target.value;
            break;
        case "paper":
            human = e.target.value;
            break;
        case "scissors":
            human = e.target.value;
            break;
    }
    playRound(human, getComputerChoice());
    scores.textContent = humanScore + " - " + computerScore;
}));
