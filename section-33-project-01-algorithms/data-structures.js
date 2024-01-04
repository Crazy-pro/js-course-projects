const age = [30, 29, 54]

// [30, 29, 54] => [30, 29, 54, _]
// [20, 30, 40] => [20, 30, 40, 50]
age.push(60) // => Constant Time Complexity: O(1)

// [30, 29, 54] => [_, 30, 29, 54]
// [20, 30, 40] => [20, 30, 40, 50]
age.unshift(10) // => Linear Time Complexity: O(n)

const myAge = age[1] // => Constant Time Complexity: O(1)

// --------

const namePopularity = [
    {
        userName: 'Alex',
        usages: 7
    },
    {
        userName: 'Max',
        usages: 45
    }
]
const maxusages = namePopularity.find(pers => pers.userName === 'Max').usages
// Best Case: Constant Time Complexity => O(1)
// Worth Case: Linear Time Complexity: O(n)
// Average Case: Linear Time Complexity: O(n)

const nameMap = {
    'Max': 45,
    'Alex': 7
}

const maxUsages2 = nameMap['Max'] // => Constant time Complexity: O(1)

// const nameRealMap = new Map()
