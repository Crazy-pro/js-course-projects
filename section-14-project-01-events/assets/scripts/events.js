const buttons = document.querySelectorAll('button')

const buttonClickHandler = event => {
    event.target.disabled = true
}

// button.onclick = function () {

// }

// button.onclick = buttonClickHandler

// const boundFunction = buttonClickHandler.bind(this)

// button.addEventListener('click', boundFunction)

// setTimeout(() => {
//     button.removeEventListener('click', boundFunction)
// }, 2000)


buttons.forEach((button) => {
    button.addEventListener('click', buttonClickHandler)
})