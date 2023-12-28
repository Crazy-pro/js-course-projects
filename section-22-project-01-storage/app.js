const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

const userId = 'u123'

const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

storeButton.addEventListener('click', () => {
    localStorage.setItem('uid', userId)
    localStorage.setItem('user', user)
})

retrieveButton.addEventListener('click', () => {
    const extractedId = localStorage.getItem('uid')
    if (extractedId) {
        console.log('Got the id - ' + extractedId)
    } else {
        console.log('Couldn\'t find the id...')
    }
})
