const defaultResult = 0
let currentResult = defaultResult

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

function add() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult = currentResult + enteredNum
  createAndWriteOutput('+', initialResult, enteredNum)
}

function substract() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult = currentResult - enteredNum
  createAndWriteOutput('-', initialResult, enteredNum)
}

function multiply() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult = currentResult * enteredNum
  createAndWriteOutput('*', initialResult, enteredNum)
}

function divide() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult = currentResult / enteredNum
  createAndWriteOutput('/', initialResult, enteredNum)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
