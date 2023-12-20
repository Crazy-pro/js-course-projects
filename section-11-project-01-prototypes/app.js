// class Person {
//     name = 'Alex'

//     constructor() {
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

const person = new Person()
person.greet()
