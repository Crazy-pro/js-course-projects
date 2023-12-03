const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription) // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

// if-else statements
function calculateResult(calcType){
  const enteredNum = getUserNumberInput()
  const initialResult = currentResult

  let mathOperator

  if(calcType === 'add'){
    currentResult += enteredNum
    mathOperator = '+'
  } else if(calcType === 'substract'){
    currentResult -= enteredNum
    mathOperator = '-'
  } else if(calcType === 'multiply'){
    currentResult *= enteredNum
    mathOperator = '*'
  } else if(calcType === 'divide'){
    currentResult /= enteredNum
    mathOperator = '/'
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber)
  writeToLog(calcType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('add')
}

function subtract() {
  calculateResult('subtract')
}

function multiply() {
  calculateResult('multiply')
}

function divide() {
  calculateResult('divide')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
