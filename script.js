// Computer Move Choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) // gives us a number 0 to 2
    
    if (computerChoice === 0) {
        computerChoice = 'Rock'
    } else if (computerChoice === 1) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }

    return computerChoice
}

// Human Move Choice
function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper, Scissors, Shoot! Enter your move: ')
    humanChoice = (humanChoice.charAt(0).toUpperCase()) + (humanChoice.substring(1).toLowerCase())

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
        (humanChoice === 'Rock' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Rock')
    ){
        console.log(`You lost. ${computerChoice} beats ${humanChoice}.`)
        computerScore += 1
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ){
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
        humanScore += 1
    } else {
        console.log(`Invalid input. Press enter to try again.`)
        playRound()
    }

    return humanScore, computerScore, tieCounter
}

function playGame() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)

    console.log(`You have ${humanScore} points and the CPU has ${computerScore} points.`)

    if ((humanScore < 3) && (computerScore < 3)) {
        playGame()
    } else {
        console.log(`Final score is: You-> ${humanScore} ; CPU-> ${computerScore}`)
        humanScore = 0
        computerScore = 0
        let playAgain = confirm('Press OK to play again or Cancel to quit')
        if (playAgain) {
            playGame()
        } else {
            console.log('Thanks for playing!')
        }
    }
    return gameNum
}

playGame()