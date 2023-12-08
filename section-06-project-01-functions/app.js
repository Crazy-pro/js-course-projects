const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK

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

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning){
        return
    }
    gameIsRunning = true
    console.log('Game is starting...')
    const playerSelection = getPlayerChoice()
    console.log(playerSelection)
})
