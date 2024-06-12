let humanScore = 0;
let computerScore = 0;

// SCORE : SCORE
const containerScore = document.getElementById("scores");
const currentScore = document.createElement("p");
currentScore.id = "score";
containerScore.appendChild(currentScore);

// CHOICE vs CHOICE
const choices = document.createElement("p");
containerScore.appendChild(choices);

// YOU WIN / YOU LOSE
const winner = document.createElement("p");
containerScore.appendChild(winner);

function main() {

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    // EVEN LISTENERS FOR BUTTONS
    rockButton.addEventListener("click", function() {
        choseRock();
    });

    paperButton.addEventListener("click", function() {
        chosePaper();
    });

    scissorsButton.addEventListener("click", function() {
        choseScissors();
    });

    // UPDATES THE SCORE AFTER EACH ROUND
    currentScore.textContent = `${humanScore} : ${computerScore}`;

}

function getComputerChoice() {

    const max = 3;
    let num = Math.floor(Math.random() * max);

    if (num === 0) { return "rock"; }
    if (num === 1) { return "paper"; }
    if (num === 2) { return "scissors"; }
}

function choseRock() {

    const humanChoice = "rock";
    const computerChoice = getComputerChoice();

    // CLEAR SCORE CONTAINER EACH ROUND
    containerScore.textContent = "";

    // REDO SCORE & CHOICES
    choices.textContent = `${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`;
    containerScore.appendChild(currentScore);
    containerScore.appendChild(choices);
    choices.style.color = "white";
    
    // ROUND
    if  (humanChoice === computerChoice) {

        winner.textContent = "It's a tie!";
        winner.style.color = "#fde74c";
        containerScore.appendChild(winner);

    } else if (computerChoice === "paper") {

        winner.textContent = "You lose! Paper beats rock!";
        winner.style.color = "#e55934";
        containerScore.appendChild(winner);

        computerScore += 1;

    } else if (computerChoice === "scissors") {

        winner.textContent = "You win! Rock beats scissors!";
        winner.style.color = "#9bc53d";
        containerScore.appendChild(winner);

        humanScore += 1;

    }

    // PUTS THE COMPUTER CHOICE IN THE BUTTON
    const compChoice = document.getElementById("computerChoice");
    compChoice.textContent = `${computerChoice}`.toUpperCase();

    //UPDATE THE SCORE
    currentScore.textContent = `${humanScore} : ${computerScore}`;

    checkWins();
}

function chosePaper() {

    const humanChoice = "paper";
    const computerChoice = getComputerChoice();

    // CLEAR SCORE CONTAINER EACH ROUND
    containerScore.textContent = "";

    // REDO SCORE & CHOICES
    choices.textContent = `${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`;
    containerScore.appendChild(currentScore);
    containerScore.appendChild(choices);
    choices.style.color = "white";
    
    // ROUND
    if  (humanChoice === computerChoice) {

        winner.textContent = "It's a tie!";
        winner.style.color = "#fde74c";
        containerScore.appendChild(winner);

    } else if (computerChoice === "rock") {

        winner.textContent = "You win! Paper beats rock!";
        winner.style.color = "#9bc53d";
        containerScore.appendChild(winner);

        humanScore += 1;

    } else if (computerChoice === "scissors") {

        winner.textContent = "You lose! Scissors beat paper!";
        winner.style.color = "#e55934";
        containerScore.appendChild(winner);

        computerScore += 1;

    }

    // PUTS THE COMPUTER CHOICE IN THE BUTTON
    const compChoice = document.getElementById("computerChoice");
    compChoice.textContent = `${computerChoice}`.toUpperCase();

    //UPDATE THE SCORE
    currentScore.textContent = `${humanScore} : ${computerScore}`;

    checkWins();
}

function choseScissors() {

    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();

    // CLEAR SCORE CONTAINER EACH ROUND
    containerScore.innerHTML = "";

    // REDO SCORE & CHOICES
    choices.textContent = `${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`;
    containerScore.appendChild(currentScore);
    containerScore.appendChild(choices);
    choices.style.color = "white";
    
    // ROUND
    if  (humanChoice === computerChoice) {

        winner.textContent = "It's a tie!";
        winner.style.color = "#fde74c";
        containerScore.appendChild(winner);

    } else if (computerChoice === "paper") {

        winner.textContent = "You win! Scissors beat paper!";
        winner.style.color = "#9bc53d";
        containerScore.appendChild(winner);

        humanScore += 1;

    } else if (computerChoice === "rock") {

        winner.textContent = "You lose! Rock beats scissors!";
        winner.style.color = "#e55934";
        containerScore.appendChild(winner);

        computerScore += 1;

    }

    // PUTS THE COMPUTER CHOICE IN THE BUTTON
    const compChoice = document.getElementById("computerChoice");
    compChoice.textContent = `${computerChoice}`.toUpperCase();

    //UPDATE THE SCORE
    currentScore.textContent = `${humanScore} : ${computerScore}`;

    checkWins();

}

function checkWins() {
    if (humanScore === 5 || computerScore === 5) {

        // HIDE OTHER CONTAINERS
        const left = document.getElementById("yourChoice");
        left.style.display = "none";

        const right = document.getElementById("compChoice");
        right.style.display = "none";

        if (humanScore === 5) {

            currentScore.textContent = `${humanScore} : ${computerScore}`;
            choices.textContent = "YOU WON! :)";
            choices.style.color = "lightpink";
            winner.style.display = "none";

            const containerScore = document.getElementById("scores");
            containerScore.style.border = "3px solid lightpink";
            containerScore.style.backgroundColor = "#171717";

            const againButton = document.getElementById("tryagain");
            againButton.style.display = "flex";

        } else {

            currentScore.textContent = `${humanScore} : ${computerScore}`;
            choices.textContent = "YOU LOST! :(";
            choices.style.color = "lightblue";
            winner.style.display = "none";

            const containerScore = document.getElementById("scores");
            containerScore.style.border = "3px solid lightblue";
            containerScore.style.backgroundColor = "#171717";

            const nextButton = document.getElementById("nexttime");
            nextButton.style.display = "flex";

        }
    }
}

main();
