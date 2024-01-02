// Library land 
const uid = Symbol()
console.log(uid)

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Alex',
  age: 25,
  [Symbol.toStringTag]: 'User'
}

user[uid] = 'p3'

// app land => Using the library

user.id = 'p2' // this should not be possible!

console.log(user[Symbol('uid')])
console.log(Symbol('uid') === Symbol('uid'))
console.log(user.toString())

const company = {
  currentEmployee: 0,
  employees: ['Alex', 'Andrew', 'Ann'],
  next() {
    if (this.currentEmployee >= this.employees.length) {
      return {
        value: this.currentEmployee,
        done: true
      }
    }

    const returnValue = {
      value: this.employees[this.currentEmployee],
      done: false
    }
    this.currentEmployee++
    return returnValue
  },
  // getEmployee: function* employeeGenerator() {
  //   // let employee = company.next()

  //   // while (!employee.done) {
  //   //   yield employee.value
  //   //   employee = company.next()
  //   // }
  //   let currentEmployee = 0
  //   while (currentEmployee < this.employees.length) {
  //     yield this.employees[currentEmployee]
  //     currentEmployee++
  //   }
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next()

    // while (!employee.done) {
    //   yield employee.value
    //   employee = company.next()
    // }
    let currentEmployee = 0
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee]
      currentEmployee++
    }
  }
}

// let employee = company.next()

// while (!employee.done) {
//   console.log(employee.value)
//   employee = company.next()
// }

for (const employee of company) {
  console.log(employee)
}

// console.log([...company])

// const it = company.getEmployee()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

const persons = ['Alex', 'Ann']
console.log(persons)

// ----

const course = {
  title: 'JavaScript - Course'
}

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title
  }
})

// Reflect.deleteProperty(course, 'title')

// Object.deleteProperty(course, 'title')

// delete course.title

console.log(course.toString())

const courseHandler = {
  get(object, propertyName) {
    console.log(propertyName)
    if (propertyName === 'length') {
      return 0
    }
    return object[propertyName] || 'Not Found!'
  },
  set(object, propertyName, newValue) {
    console.log('Sending Data...')
    if (propertyName === 'rating') {
      return
    }
    object[propertyName] = newValue
  }
}

const projectProxy = new Proxy(course, courseHandler)

console.log(projectProxy.title)
console.log(course)
console.log(projectProxy)
console.log(course.title)
console.log(projectProxy.length)

projectProxy.rating = 5
