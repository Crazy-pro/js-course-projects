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

div.addEventListener('mouseenter', event => {
    console.log('Clicked Div')
    console.log(event)
}/*, true*/)

button.addEventListener('click', function (event) {
    event.stopPropagation()
    console.log('Clicked Button')
    console.log(event)
    console.log(this)
})


// const listItems = document.querySelectorAll('li')

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight')
//     })
// })

const list = document.querySelector('ul')
list.addEventListener('click', function (event) {
    console.log(event.currentTarget)
    // event.target.classList.toggle('highlight')
    event.target.closest('li').classList.toggle('highlight')
    // form.sumbit()
    button.click()
    console.log(this)
})
