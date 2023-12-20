class AgedPerson {
    printAge() {
        console.log(`${this.age} years old.`)
    }
}

class Person extends AgedPerson {
    name = 'Alex'

    constructor() {
        super()
        this.age = 25
    }

    greet() {
        console.log(`Hi there. I\'m ${this.name} I\'m ${this.age} years old.`)
    }
}

// function Person() {
//     this.name = 'Alex'
//     this.age = 25
//     this.greet = () => console.log(`Hi there. I\'m ${this.name} I\'m ${this.age} years old.`)
// }

// Person.prototype = {
//     printAge() {
//         console.log(`${this.age} years old.`)
//     }
// }

const person = new Person()
person.greet()
person.printAge()

console.dir(Person)

console.log(person.toString())
console.log(person.__proto__)
console.log(person.__proto__.constructor)
console.log(person.__proto__.__proto__)
console.log(person.__proto__ === Person.prototype)
