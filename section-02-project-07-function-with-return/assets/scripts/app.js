const defaultResult = 0

let currentResult = defaultResult

currentResult = (currentResult + 10) * 8 / 2 - 3**3

let calculationDescription = `(${defaultResult} + 10) * 8 / 2 - 3**3 =`

outputResult(currentResult, calculationDescription)

function sum(num1, num2){
    return num1 + num2
}

const result = sum(1034, 1676)

alert('num1 + num2 = ' + result)