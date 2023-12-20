// class AgedPerson {
//     printAge() {
//         console.log(`${this.age} years old.`)
//     }
// }

// class Person extends AgedPerson {
//     name = 'Alex'

//     constructor() {
//         super()
//         this.age = 25
//     }

//     greet() {
//         console.log(`Hi there. I\'m ${this.name} I\'m ${this.age} years old.`)
//     }
// }

function Person() {
    this.name = 'Alex'
    this.age = 25
    this.greet = () => console.log(`Hi there. I\'m ${this.name} I\'m ${this.age} years old.`)
}

// Person.prototype = {
//     printAge() {
//         console.log(`${this.age} years old.`)
//     }
// }

const person = new Person()
person.greet()
// person.printAge()

Person.prototype.printAge = function () {
    console.log(`${this.age} years old.`)
}

Person.describe = function () {
    console.log('Creating Person...')
}

console.dir(Person)
console.dir(Object)

console.log(person.__proto__)
console.log(person.toString())
console.log(person.__proto__.constructor)
console.log(person.__proto__.__proto__)
console.log(person.__proto__ === Person.prototype)

const person2 = new person.__proto__.constructor()
console.log(person2)
console.log(person2.length)
console.log(Object.length)

console.dir(Object.prototype.__proto__)
