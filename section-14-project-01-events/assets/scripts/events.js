const button = document.querySelector('button')

const buttonClickHandler = event => {
    // event.target.disabled = true
    console.log(event)
}

// button.onclick = function () {

// }

// button.onclick = buttonClickHandler

// const boundFunction = buttonClickHandler.bind(this)

// button.addEventListener('click', boundFunction)

// setTimeout(() => {
//     button.removeEventListener('click', boundFunction)
// }, 2000)


// buttons.forEach((button) => {
//     button.addEventListener('mouseenter', buttonClickHandler)
// })

// window.addEventListener('scroll', event => {
//     console.log(event)
// })

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
})

const div = document.querySelector('div')

div.addEventListener('click', event => {
    console.log('Clicked Div')
    console.log(event)
}, true)

button.addEventListener('click', event => {
    event.stopPropagation()
    console.log('Clicked Button')
    console.log(event)
})
