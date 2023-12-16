// const ids = new Set([1, 2, 3])
// ids.add(1)
// console.log(ids)
// console.log(ids.has(1))

// if (ids.has(2)){
//     console.log(ids.has(2))
//     ids.delete(2)
// }

// for (const entry of ids.entries()) {
//     console.log(entry)
// }

const person1 = {name:'Alex'}
const person2 = {name:'Max'}

const personData = new Map([[person1,[{date:'today', price: 10}]]])

personData.set(person2, [{age:26, surname:'Klimchuk'}])


console.log(personData)
console.log(personData.get(person1))

for (const [key, value] of personData.entries()) {
    console.log(key, value)
}

for (const key of personData.keys()) {
    console.log(key)
}

for (const value of personData.values()) {
    console.log(value)
}

console.log(personData.size)
