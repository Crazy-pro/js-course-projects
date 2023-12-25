const button = document.querySelector('button')
const output = document.querySelector('p')

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Some text')
    }, duration)
  })
  return promise
}

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    position => {
      setTimer(2000).then(data => {
        console.log(data, position)
      })
      console.log('Position: ', position)
    }, error => {
      console.log('Error: ', error)
    })

  setTimer(1000).then(() => {
    console.log('Timer is done')
  })
  console.log('Getting Position...')
}

button.addEventListener('click', trackUserHandler)

// let result = 0

// for (let i = 0; i < 100000; i++) {
//   result += i
// }

// console.log(result)
