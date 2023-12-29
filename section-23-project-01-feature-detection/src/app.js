// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

const button = document.querySelector('button')
const textParagraph = document.querySelector('p')

button.addEventListener('click', () => {
  const text = textParagraph.textContent
  if (navigator.clipboard) {
    navigator.clipboard
    const promise = new Promise()
    console.log(promise)
      .writeText(text)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  } else {
    alert('Feature not available, please copy manually!')
  }
})
