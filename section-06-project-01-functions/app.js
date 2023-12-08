const startGameBtn = document.getElementById('start-game-btn')

const start = function startGame() {
    console.log('Game is starting...')
}

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

startGameBtn.addEventListener('click', start)
