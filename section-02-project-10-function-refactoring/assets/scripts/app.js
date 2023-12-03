const defaultResult = 0
let currentResult = defaultResult

function getUserEnteredNum(){
  return parseInt(userInput.value)
}

function add() { 
  const enteredNum = getUserEnteredNum()
  const calcDescription = `${currentResult} + ${enteredNum}`
  currentResult = currentResult + enteredNum
  outputResult(currentResult, calcDescription)
}

addBtn.addEventListener('click', add)
