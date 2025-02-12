function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) // gives us a number 0 to 2
    console.log(computerChoice)
    
    if (computerChoice === 0) {
        computerChoice = 'Rock'
    } else if (computerChoice === 1) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
}