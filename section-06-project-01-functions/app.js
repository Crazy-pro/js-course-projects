const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for u!`)
        return DEFAULT_USER_CHOICE
    }
    return selection
}

const getComputerChoice = function() {
    const randomChoice = Math.random()
    if(randomChoice < 0.34) {
        return ROCK
    } else if(randomChoice < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

const getWinner = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice) {
        return RESULT_DRAW
    } else if(playerChoice === ROCK && computerChoice === SCISSORS ||
              playerChoice === PAPER && computerChoice === ROCK ||
              playerChoice === SCISSORS && computerChoice === PAPER) {
        return RESULT_PLAYER_WINS
    } else {
        return RESULT_COMPUTER_WINS
    }
}

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning){
        return
    }
    gameIsRunning = true
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice)
    console.log(winner)
})



// const start = function startGame() {
//     console.log('Game is starting...')
// }

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hi there')
//     }
// }

// person.greet()

// function is an object
// console.dir(start)
// console.log(typeof start)

// anonymous function()
// startGameBtn.addEventListener('click', function() {
//     console.log('Game is starting...')
// })
