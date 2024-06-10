let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const max = 3;
    let num = Math.floor(Math.random() * max);

    if (num === 0) { return "rock"; }
    if (num === 1) { return "paper"; }
    if (num === 2) { return "scissors"; }
}

function getHumanChoice() {

    let loop = true;

    while(loop) {
    let choice = window.prompt("Rock, paper or scissors? ").toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        window.alert("Invalid choice. Try again.")
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { console.log("It's a tie!") }

    else if (humanChoice === "rock")
        {
            if (computerChoice === "paper")
                {
                    console.log("Paper beats rock! You lost!");
                    computerScore += 1;
                }

            else if (computerChoice === "scissors")
                {
                    console.log("Rock beats scissors! You won!");
                    humanScore += 1;
                }
        }
    
    else if (humanChoice === "paper")
        {
            if (computerChoice  === "rock")
                {
                    console.log("Paper beats rock! You won!");
                    humanScore += 1;
                }

            else if (computerChoice === "scissors")
                {
                    console.log("Scissors beat paper! You lost!");
                    computerScore += 1;
                }
        }
    
    else if (humanChoice === "scissors")
        {
            if (computerChoice === "paper")
                {
                    console.log("Scissors beat paper! You won!");
                    humanScore += 1;
                }
            
            else if (computerChoice === "rock")
                {
                    console.log("Rock beats scissors! You lost!");
                    computerScore += 1;
                }
        }
}


function playGame() {

    let games = 0;
    while (games < 5)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            games += 1;
        }

    console.log("Final Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    
    if (computerScore > humanScore)
        {
            console.log("You lost!");
        }

    else if (computerScore < humanScore)
        {
            console.log("You won!");
        }
    
    else { console.log("It's a tie!")}
}

document.getElementById("startGameButton").addEventListener("click", startGame);

function startGame() {

    const game = document.getElementById("game");

    // CREATE TEXT in #GAME

        const greeting = document.createElement('h4');
        greeting.textContent = "Choose: ";
        game.appendChild(greeting);


    // CREATE BUTTONS IN #GAME

        // create a rock button
        const rock = document.createElement('button');
        rock.textContent = "Rock";
        game.appendChild(rock);

        // create a paper button
        const paper = document.createElement('button');
        paper.textContent = "Paper";
        game.appendChild(paper);

        // create a scissors button
        const scissors = document.createElement('button');
        scissors.textContent = "Scissors";
        game.appendChild(scissors);
    
}