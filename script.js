// Computer Move Choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) // gives us a number 0 to 2
    
    if (computerChoice === 0) {
        computerChoice = 'R'
    } else if (computerChoice === 1) {
        computerChoice = 'P'
    } else {
        computerChoice = 'S'
    }

    return getComputerChoice
}

// Human Move Choice
function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper, Scissors, Shoot! Enter your move: ')
    humanChoice = humanChoice.charAt(0).toUpperCase()
    
    return humanChoice
}

// Score intialized
let humanScore = 0
let computerScore = 0
let tieCounter = 0

// single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log('It is a tie!')
        tieCounter += 1
    } else if (
        (humanChoice === 'R' && computerChoice === 'P') ||
        (humanChoice === 'P' && computerChoice === 'S') ||
        (humanChoice === 'S' && computerChoice === 'R')
    ){
        console.log(`You lost. ${computerChoice} beats ${humanChoice}.`)
        computerScore += 1
    } else if (
        (humanChoice === 'R' && computerChoice === 'S') ||
        (humanChoice === 'P' && computerChoice === 'R') ||
        (humanChoice === 'S' && computerChoice === 'P')
    ){
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
        humanScore += 1
    } else {
        console.log(`Invalid input. Press enter to try again.`)
    }
}