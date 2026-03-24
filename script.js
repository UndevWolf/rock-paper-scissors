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
        matchResult.textContent = "You Win";
     }
    else if (human == computer) {
        matchResult.textContent = "Tie";
    }
    else {
        computerScore += 1;
        matchResult.textContent = "You Lose.";
    }
}

let humanScore = 0;
let computerScore = 0;
const choiceButton = document.querySelectorAll(".choiceButton");
const scores = document.querySelector("#scores");
const matchResult = document.querySelector("#result");
const hand = document.querySelectorAll(".animation");
const playerHand = document.querySelector("#playerHand");
const compHand = document.querySelector("#compHand");

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
    let computerChoice = getComputerChoice()
    animate(human,computerChoice);
    playRound(human, computerChoice);
    if (humanScore == 5) {
        scores.textContent = humanScore + " - " + computerScore;
        humanScore = 0;
        computerScore = 0;
        matchResult.textContent = "Conrgrats, you won.";
    }
    else if (computerScore == 5) {
        scores.textContent = humanScore + " - " + computerScore;
        humanScore = 0;
        computerScore = 0;
        matchResult.textContent = "Computer won the game.";
    }
    
    scores.textContent = humanScore + " - " + computerScore;
}));

function animate(player,computer) {
    hand.forEach((p) => {
    let id = null;
    p.src = `assets/rock.png`
    let pos = 0;
    let repetition = 0;
    clearInterval(id);
    id = setInterval(() => {
        if (repetition == 3) {
            p.style.top = "20px";
            playerHand.src = `assets/${player}.png`;
            compHand.src = `assets/${computer}.png`
            clearInterval(id);}
        else if (pos == 50){
           pos = 0;
           repetition++;
        }   
        else {
            pos++;
            p.style.top = pos + "px";
        }
    }, 7);
    });
}