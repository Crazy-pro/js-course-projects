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

    // greet = () => {
    //     console.log(`Hi there. I\'m ${this.name} I\'m ${this.age} years old.`)
    // }

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

// const person = new Person()
// person.greet()
// // person.printAge()

// Person.prototype.printAge = function () {
//     console.log(`${this.age} years old.`)
// }

// Person.describe = function () {
//     console.log('Creating Person...')
// }

// console.dir(Person)
// console.dir(Object)

// console.log(person.__proto__)
// console.log(person.toString())
// console.log(person.__proto__.constructor)
// console.log(person.__proto__.__proto__)
// console.log(person.__proto__ === Person.prototype)

// const person2 = new person.__proto__.constructor()
// console.log(person2)
// console.log(person2.length)
// console.log(Object.length)

// console.dir(Object.prototype.__proto__)

// const person = new Person()
// const person2 = new Person()
// person.greet()
// console.log(person)

// const button = document.getElementById('btn')
// button.addEventListener('click', person.greet.bind(person))


const course = {
    title: 'JS',
    rating: 5
}

// console.log(Object.getPrototypeOf(course))
Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printRating: function () {
        console.log(`Course rating - ${this.rating}/5`)
    }
})
// console.log(course.__proto__)

course.printRating()

const student = Object.create({
    printProgress: function () {
        console.log(`Course progress - ${this.progress}/100%`)
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        writable: false,
        value: 'Alex'
    }
})

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    writable: false,
    value: 0.99
})
console.log(student)
