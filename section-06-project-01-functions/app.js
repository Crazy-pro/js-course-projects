const startGameBtn = document.getElementById('start-game-btn')

function startGame() {
    console.log('Game is starting...')
}

const person = {
    name: 'Max',
    greet: function greet() {
        console.log('Hi there')
    }
}

person.greet()

startGameBtn.addEventListener('click', startGame)
