const button = document.querySelector('button')
const output = document.querySelector('p')

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success)
      },
      error => {
        reject(error)
      }, options)
  })
  return promise
}

const setTimer = /*async*/ duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Some text')
    }, duration)
  })
  return promise
}

async function trackUserHandler() {
  // let positionData
  const position = await getPosition()
  const timerData = await setTimer(2000)
  console.log(timerData, position)
  // .then()
  // .then()
  /*.then(position => {
    positionData = position
    return setTimer(2000)
  }, err => {
    console.log(err)
  })*/
  // .then()
  // .catch(err => {
  //   console.log(err)
  //   return 'handle some error and continue...'
  // })
  // .then(data => {
  //   console.log(data, positionData)
  // })
  // .catch()

  // setTimer(1000).then(() => {
  //   console.log('Timer is done')
  // })
  // console.log('Getting Position...')
}

button.addEventListener('click', trackUserHandler)

// let result = 0

// for (let i = 0; i < 100000; i++) {
//   result += i
// }

// console.log(result)
