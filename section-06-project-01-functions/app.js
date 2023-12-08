const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for u!`)
        return
    }
    return selection
}

const getComputerChoice = () => {
    const randomChoice = Math.random()
    if(randomChoice < 0.34) {
        return ROCK
    } else if(randomChoice < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {
    return playerChoice === computerChoice 
    ? RESULT_DRAW 
    : ( playerChoice === ROCK && computerChoice === SCISSORS ||
        playerChoice === PAPER && computerChoice === ROCK ||
        playerChoice === SCISSORS && computerChoice === PAPER ) 
            ? RESULT_PLAYER_WINS
            : RESULT_COMPUTER_WINS
}

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return
    }
    gameIsRunning = true
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    let winner
    if(playerChoice){
        getWinner(computerChoice, playerChoice)
    } else {
        getWinner(computerChoice)
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE} and computer picked ${computerChoice}. You `
    if(winner === RESULT_DRAW) {
        message += 'have a draw.' 
    } else if(winner === RESULT_DRAW) {
        message += 'won.' 
    } else {
        message += 'lost.' 
    }
    alert(message)
})

const sumUp = (a, b, ...nums) => {
    const validateNumber = (num) => isNaN(num) ? 0 : num

    let sum = 0
    for(const num of nums){
        sum += validateNumber(num)
    }
    return sum
}

const substractUp = function() {
    let sum = 0
    for(const num of arguments){ // don't use this default arguments keyword
        sum -= num
    }
    return sum
}

console.log(sumUp(1, 3, 4, 5, 6, 7))
console.log(substractUp(1, 3, 4, 5, 6, 7))

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

// const add = (a, b) => a + b

// const add2 = function(a, b) {
//     return a + b
// }
