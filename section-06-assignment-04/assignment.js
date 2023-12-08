const sayHello = name => console.log('Hi ' + name)

const sayHello2 = () => console.log('Hi there!')

const sayHello3 = name => { 'Hello ' + name }

const sayHello4 = (name, phrase) => console.log(phrase + ' ' + name)

const sayHello5 = (name, phrase = 'Hi') => { console.log(phrase + ' ' + name) }

sayHello2()
sayHello3('Alex')
sayHello4('Whats app', 'Alex')
console.log(sayHello3('Alex'))

sayHello5('Max')
sayHello5('Max', 'Hello')

function checkInput(callBack, ...strings) {
  let hasEmptyText = false
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true
      break
    }
  }
  if (!hasEmptyText) {
    callBack()
  }
}

checkInput(
  () => console.log('All not empty!'),
  'Hello', '12', 'adsfa', 'Not empty'
)
