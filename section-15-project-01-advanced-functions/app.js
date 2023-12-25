function add(num1, num2) {
    return num1 + num2
}

function addRandom(num1) {
    return num1 + Math.random()
}

let previousResult = 0

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2
    previousResult = sum
    return sum
}

console.log(add(5, 9))
console.log(addRandom(7))
console.log(addMoreNumbers(7, 13))

hobbies = ['Sports', 'Cooking']

function printHobbies() {
    hobbies.push('Some new hobby')
    console.log(hobbies)
}

printHobbies()

// function sendDataToServer() {
// }

// function calculateTax(amount) {
//     return amount * tax
// }

// const vatAmount = calculateTax(100, 0.19)
// const incomeAmount = calculateTax(100, 0.25)

let multiplier = 1.1

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier)
        return amount * tax * multiplier
    }
    return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeAmount = createTaxCalculator(0.25)

multiplier = 1.2

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200))
console.log(calculateIncomeAmount(250))
console.log(calculateIncomeAmount(350))

let userName = 'Alex'

function greetUser() {
    let name = 'Ann'
    console.log('Hi ' + name)
}

let name = 'Alex'

userName = 'Ann'

greetUser()
