const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

storeButton.addEventListener('click', () => {
    const userId = 'u123'
    const user = {
        name: 'Max',
        age: 30,
        hobbies: ['Sports', 'Cooking']
    }
    document.cookie = `uid=${userId}; max-age=360`
    document.cookie = `user=${JSON.stringify(user)}`
})

retrieveButton.addEventListener('click', () => {
    console.log(document.cookie)
    const cookieData = document.cookie.split(';')
    const data = cookieData.map(i => i.trim())
    console.log(data[1].split('=')[1])
})

