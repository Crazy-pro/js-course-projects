const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

const dbRequest = indexedDB.open('StorageDummy', 1)

let db

dbRequest.onsuccess = function (event) {
    db = event.target.result
}

dbRequest.onupgradeneeded = function (event) {
    db = event.target.result

    const objectStore = db.createObjectStore('products', { keyPath: 'id' })

    objectStore.transaction.oncomplete = function (event) {
        const productsStore = db
            .transaction('products', 'readwrite')
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
    if (!db) {
        return
    }

    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products')
    productsStore.add({
        id: 'p2',
        title: 'A first Product',
        price: 1232.99,
        tags: ['Expensive', 'Luxury']
    })
})

retrieveButton.addEventListener('click', () => {
    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products')

    const request = productsStore.get('p2')

    request.onsuccess = function () {
        console.log(request.result)
    }
})
