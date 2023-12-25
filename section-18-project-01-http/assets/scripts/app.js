const xmlHttpRequest = new XMLHttpRequest()

xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xmlHttpRequest.onload = function () {
    const posts = JSON.parse(xmlHttpRequest.response)
    console.log(posts)
}

xmlHttpRequest.send()
