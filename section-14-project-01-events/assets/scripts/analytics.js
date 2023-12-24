const intervalId = setInterval(() => {
  console.log('Sending analitics data...')
}, 2000)

document
  .getElementById('stop-analytics-button')
  .addEventListener('click', () => clearInterval(intervalId))