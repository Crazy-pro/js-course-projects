const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

function getUserEnteredNum(){
  return parseInt(usrInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalculation, calculationNum){
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calculationNum}`
  outputResult(currentResult, calcDescription)
}

// Add standard comment 

// another comment
// ToDo: something that u should complete later

/*
Multi row 
comment
*/

/**
 * JavaScript 
 * Documenting 
 * comment 
 * format
 */

function increment() { 
  // currentResult++
  ++currentResult
}

function decrement() { 
  currentResult--
  // --currentResult
}

function add() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult += enteredNum
  createAndWriteOutput('+', initialResult, enteredNum)
  logEntries.push(enteredNum)
  console.log('The last added element: ', logEntries[logEntries.length - 1])
}

function substract() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult -= enteredNum
  createAndWriteOutput('-', initialResult, enteredNum)
}

function multiply() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult *= enteredNum
  createAndWriteOutput('*', initialResult, enteredNum)
}

function divide() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult /= enteredNum
  createAndWriteOutput('/', initialResult, enteredNum)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
