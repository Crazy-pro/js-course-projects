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

console.dir(start)
console.log(typeof start)

startGameBtn.addEventListener('click', start)
