const defaultResult = 0

let currentResult = defaultResult

currentResult = (currentResult + 10) * 8 / 2 - 3**3

let calculationDescription = `(${defaultResult} + 10) * 8 / 2 - 3**3 =`

outputResult(currentResult, calculationDescription)

function sum(num1, num2){
    const result = num1 + num2
    alert('num1 + num2 = ' + result)
}

sum(10, 17)
sum(13, 57)
sum(230, 145)