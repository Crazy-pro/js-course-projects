// /*window.*/alert()
// console.log(/*window.*/document)

const h1 = document.getElementById('main-title')

h1.textContent = 'New text'
h1.style.color = 'red'
h1.style.backgroundColor = 'orange'

const li = document.querySelector('li:last-of-type')
li.textContent = li.textContent + ' (Changed!)'

const body = document.body
body.querySelector('header') 

const listItemElements = document.getElementsByTagName('li')

for (const listItemEl of listItemElements) {
    console.dir(listItemEl)
}