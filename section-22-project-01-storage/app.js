const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

const dbRequest = indexedDB.open('StorageDummy', 1)

dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result

    const objectStore = db.createObjectStore('products', { keyPath: 'id' })

    objectStore.transaction.oncomplete = function (event) {
        const productsStore = db.transaction('products', 'readwrite')
            .objectStore('products')
        productsStore.add({
            id: 'p1',
            title: 'A first Product',
            price: 12.99,
            tags: ['Expensive', 'Luxury']
        })
    }
}

dbRequest.onerror = function (event) {
    console.log('Error!')
}

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

