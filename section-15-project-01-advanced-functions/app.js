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

// function powerOf(value, power) {
//     let result = 1
//     for (let i = 0; i < power; i++) {
//         result *= value
//     }
//     return result
// }

// function powerOf(value, power) {
//     if (power === 1)
//         return value
//     return value * powerOf(value, power - 1)
// }

function powerOf(value, power) {
    return (power === 1) ? value : value * powerOf(value, power - 1)
}

console.log(powerOf(2, 3))

const myself = {
    name: 'Alex',
    friends: [
        {
            name: 'Max',
            friends: [
                {
                    name: 'Ann',
                    friends: [
                        {
                            name: 'Ann',
                            friends: [
                                {
                                    name: 'Ann'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
}

function getFriendNames(person) {
    const collectedNames = []
    if (!person.friends) {
        return []
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name)
        collectedNames.push(...getFriendNames(friend))
    }
    return collectedNames
}

console.log(getFriendNames(myself))
