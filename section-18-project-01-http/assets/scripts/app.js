const xmlHttpRequest = new XMLHttpRequest()

xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xmlHttpRequest.responseType = 'json'

xmlHttpRequest.onload = function () {
    // const posts = JSON.parse(xmlHttpRequest.response)
    const posts = xmlHttpRequest.response

    for (const post of posts) {
        const postElement = document.importNode(postTemplate.content, true)
        postElement.querySelector('h2').textContent = post.title.toUpperCase()
        postElement.querySelector('p').textContent = post.body
        listElement.append(postElement)
    }
    console.log(posts)
}

xmlHttpRequest.send()

const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
