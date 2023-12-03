const defaultResult = 0
let currentResult = defaultResult

function getUserEnteredNum(){
  return +usrInput.value // use + or add parseInt() method to fix error
}

function createAndWriteOutput(operator, resultBeforeCalculation, calculationNum){
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calculationNum}`
  outputResult(currentResult, calcDescription)
}

function writeToLog(operator, prevResult, number, newResult){
  let logEntry = {
    operation: operator,
    initValue: prevResult,
    enteredNumber: number,
    result: newResult
  }
  // console.log(logEntry)
  console.log(logEntry.operation)
  console.log(logEntry.initValue)
  console.log(logEntry.enteredNumber)
  console.log(logEntry.result)
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
  writeToLog('Add', initialResult, enteredNum, currentResult)
}

function substract() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult -= enteredNum
  createAndWriteOutput('-', initialResult, enteredNum)
  writeToLog('Substract', initialResult, enteredNum, currentResult)
}

function multiply() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult *= enteredNum
  createAndWriteOutput('*', initialResult, enteredNum)
  writeToLog('Multiply', initialResult, enteredNum, currentResult)
}

function divide() { 
  const enteredNum = getUserEnteredNum()
  const initialResult = currentResult
  currentResult /= enteredNum
  createAndWriteOutput('/', initialResult, enteredNum)
  writeToLog('Divide', initialResult, enteredNum, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
