function getComputerChoice() {

    const max = 3;
    let num = Math.floor(Math.random() * max);

    if (num === 0) { return "rock"; }
    if (num === 1) { return "paper";}
    if (num === 2) { return "scissors"; }
}

console.log(getComputerChoice())