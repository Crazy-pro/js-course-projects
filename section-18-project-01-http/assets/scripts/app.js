const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')

const sendHttpRequest = (method, url, data) => {
    // const promise = new Promise((resolve, reject) => {
    // const xmlHttpRequest = new XMLHttpRequest()
    
    // xmlHttpRequest.setRequestHeader('Content-Type', 'application/json')

    // xmlHttpRequest.open(method, url)

    // xmlHttpRequest.responseType = 'json'

    // xmlHttpRequest.onload = function () {
    //     // const posts = JSON.parse(xmlHttpRequest.response)
    //     if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
    //         resolve(xmlHttpRequest.response)
    //     } else {
    //         reject(new Error('Something went wrong!'))
    //     }
    //     // console.log(posts)
    // }

    // xmlHttpRequest.onerror = function () {
    //     console.log(xmlHttpRequest.response)
    //     console.log(xmlHttpRequest.status)
    //     reject(new Error('Failed to send request!'))
    // }

    // xmlHttpRequest.send(JSON.stringify(data))
    // })
    // return promise
    return fetch(
        url,
        {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        // response.text()
        // response.blob()
        return response.json()
    })
}

const baseUrl = 'https://jsonplaceholder.typicode.com/'
const getPostsUrl = baseUrl + 'posts'
const postPostUrl = baseUrl + 'posts'
const deletePostUrl = baseUrl + 'posts/'

async function fetchPosts() {
    // try {
    const responseData = await sendHttpRequest('GET', getPostsUrl)
    const posts = responseData
    for (const post of posts) {
        const postElement = document.importNode(postTemplate.content, true)
        postElement.querySelector('h2').textContent = post.title.toUpperCase()
        postElement.querySelector('p').textContent = post.body
        postElement.querySelector('li').id = post.id
        listElement.append(postElement)
    }
    // } catch (error) {
    //     alert(error.message)
    // }
}

async function createPost(title, content) {
    const userId = Math.random()
    const post = {
        title: title,
        body: content,
        userId: userId
    }
    sendHttpRequest('POST', postPostUrl, post)
}

fetchButton.addEventListener('click', fetchPosts)

form.addEventListener('submit', event => {
    event.preventDefault()
    const enteredTittle = event.currentTarget.querySelector('#title').value
    const enteredContent = event.currentTarget.querySelector('#content').value
    createPost(enteredTittle, enteredContent)
})

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id
        sendHttpRequest('DELETE', deletePostUrl + postId)
    }
})
