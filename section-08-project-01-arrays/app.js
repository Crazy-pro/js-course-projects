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

// const testData = [1, 5, 7 , 10]
// const storedData = testData.slice(0, 3)
// const newArr = [1, 5, 17, 5, 5, 8.94].concat(storedData)

// testData.push(9.75)

// console.log(storedData, newArr, testData.slice())
// console.log(testData.indexOf(10))
// console.log(storedData.indexOf(-15))
// console.log(newArr.lastIndexOf(5))
// console.log(newArr.lastIndexOf(45))
// console.log(newArr.includes(1))
// console.log(newArr.includes(8.94))
// console.log(newArr.includes(18.94))

// const personData = [{name: 'Alex'}, {name: 'Ann'}]
// console.log(personData.indexOf({name: 'Alex'}))

// const ann = personData.find((person, id, persons) => {
//     return person.name === 'Ann'
// })

// const annId = personData.findIndex((person, id, persons) => {
//     return person.name === 'Ann'
// })

// console.log(ann)
// console.log(annId)
// console.log(ann.name = 'Anna')

// const prices = [10, 59, 56.98]
// const tax = 0.19
// const taxAdjustedPrices = []

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax))
// }
// console.log(taxAdjustedPrices)

// prices.forEach((price, id, prices) => {
//     const priceObject = { index: id, taxAdjustedPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObject)
// })
// console.log(taxAdjustedPrices)

// const prices = [10, 59, 56.98]
// const tax = 0.19

// const taxAdjustedPrices = prices.map((price, id, prices) => {
//     const priceObject = { index: id, taxAdjustedPrice: price * (1 + tax)}
//     return priceObject
// })
// console.log(prices, taxAdjustedPrices)

// const sortedPrices = prices.sort()
// const revercedSortedPrices = prices.sort((a, b) => {
//     if(a > b)
//         return 1
//     else if(a===b)
//         return 0
//     else
//         return -1
// })
// console.log(sortedPrices)
// console.log(revercedSortedPrices.reverse())

// const filteredArr = prices.filter(price => price > 20)

// console.log(filteredArr)

// const sum = prices.reduce((prevVal, curVal, curId, prices) => {
//     return prevVal + curVal
// }, 0)

// console.log(sum)

// const data = 'new york;10.89;1247'
// const arr = data.split(';')
// arr[1] = +'1247369732'
// console.log(arr)

// const firstLastName = ['Alex', 'Klimchuk']
// const fullName = firstLastName.join()
// console.log(fullName)

// const elements = [...firstLastName]
// firstLastName.push('Ivanovich')
// console.log(firstLastName, elements)


// console.log(Math.min(...prices))
// console.log(Math.max(...prices))

// const persons = [{name:'Alex', age: 25}, {name:'Andrew', age: 25, hobbies: []}, {name:'Ann', age: 25, hobbies: []}]
// const copiedPersons = [...persons.map(person => ({name: person.name, age: person.age}))]

// persons[0].age = 21
// persons.push({name:'Anna', age: 26})
// console.log(persons, copiedPersons)

// const nameData = ['Alex', 'Klimchuk']
// // const firstName = nameData[0]
// // const lastName = nameData[1]
// const [firstName, lastName, ...otherData] = nameData
// console.log(firstName, lastName, otherData)
