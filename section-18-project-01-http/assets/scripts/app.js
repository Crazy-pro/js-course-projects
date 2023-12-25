const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest()

        xmlHttpRequest.open(method, url)

        xmlHttpRequest.responseType = 'json'

        xmlHttpRequest.onload = function () {
            // const posts = JSON.parse(xmlHttpRequest.response)
            resolve(xmlHttpRequest.response)
            // console.log(posts)
        }

        xmlHttpRequest.send(JSON.stringify(data))
    })
    return promise
}

const baseUrl = 'https://jsonplaceholder.typicode.com/'
const getPostsUrl = baseUrl + 'posts'
const postPostUrl = baseUrl + 'posts'

async function fetchPosts() {
    const responseData = await sendHttpRequest('GET', getPostsUrl)
    const posts = responseData
    for (const post of posts) {
        const postElement = document.importNode(postTemplate.content, true)
        postElement.querySelector('h2').textContent = post.title.toUpperCase()
        postElement.querySelector('p').textContent = post.body
        postElement.querySelector('li').id = post.id
        listElement.append(postElement)
    }
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
