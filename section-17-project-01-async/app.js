const button = document.querySelector('button')
const output = document.querySelector('p')

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    position => {
      setTimeout(() => {
        console.log('Position: ', position)
      }, 2000)
      console.log('Position: ', position)
    }, error => {
      console.log('Error: ', error)
    })

  setTimeout(() => {
    console.log('Timer is done')
  }, 0)
  console.log('Getting Position...')
}

button.addEventListener('click', trackUserHandler)

// let result = 0

// for (let i = 0; i < 100000; i++) {
//   result += i
// }

// console.log(result)
