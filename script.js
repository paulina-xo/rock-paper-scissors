function getComputerChoice() {

    const max = 3;
    let num = Math.floor(Math.random() * max);

    if (num === 0) { return "rock"; }
    if (num === 1) { return "paper";}
    if (num === 2) { return "scissors"; }
}

function getHumanChoice() {

    let loop = true;

    while(loop) {
    let choice = window.prompt("Rock, paper or scissors? ")
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        window.alert("Invalid choice. Try again.")
    }
}