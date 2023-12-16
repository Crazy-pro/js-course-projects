// const numbers = [1, 2, 3]
// const nums = new Array('1','Hi')
// const fixedSizeArray = new Array(7)
// const array = Array.of(1, 4, 5, 7)
// const arr = Array.from('Hello world')
// const listItems = document.querySelectorAll('li')
// const arrayFrom = Array.from(listItems)

// console.log(numbers)
// console.log(nums)
// console.log(fixedSizeArray)
// console.log(array)
// console.log(arr)
// console.log(listItems)
// console.log(arrayFrom)

// const hobbies = ['Cooking', 'Sports']
// const personalData = [30, 'Alex', {moreDetails: []}]
// const analyticsData =[[-1.5,], [1, 5, 7], 'String', {5: 'Hi'}]

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint)
//     }
// }

// console.log(personalData[1])

// const hobbies = ['Cooking', 'Sports']
// hobbies.push('Gaming')
// hobbies.unshift('Reading')
// const deletedValue = hobbies.pop()
// const removedValue = hobbies.shift()

// hobbies[1] = 'Coding'
// // hobbies[5] = 'Reading'

// console.log(hobbies, hobbies[3])
// console.log(deletedValue)
// console.log(removedValue)

// hobbies.slice(1, 0, 'Good food')
// console.log(hobbies)

// hobbies.splice(0, 1)
// console.log(hobbies)

const testData = [1, 5, 7 , 10]
const storedData = testData.slice(0, 3)
const newArr = [1, 5, 17, 8.94].concat(storedData)

testData.push(9.75)

console.log(storedData, newArr, testData.slice())