class Course {
  #price

  get price() {
    return '$' + this.#price
  }

  set price(price) {
    if (price < 0) {
      throw 'Invalid price!'
    }
    this.#price = price
  }

  constructor(title, price, length) {
    this.title = title
    this.price = price
    this.length = length
  }

  calculatePrice() {
    return this.length / this.#price
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    )
  }
}

const jsCourse = new Course('JavaScript - The Complete Guide', 50, 44)
const vueJsCourse = new Course('Vue JS - The Complete Guide', 50, 36)

console.log(jsCourse)
console.log(vueJsCourse)

console.log(jsCourse.calculatePrice())
console.log(vueJsCourse.calculatePrice())

jsCourse.printSummary()
vueJsCourse.printSummary()

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length)
    this.numOfExercises = exercisesCount
  }
}

const reactCourse = new PracticalCourse(
  'React - The Complete Guide',
  36,
  50,
  10
)

console.log(reactCourse)
reactCourse.printSummary()

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...')
  }
}

const flutterCourse = new TheoreticalCourse(
  'Flutter - Build iOS and Android Apps',
  50,
  48
)

flutterCourse.price = 5000
// flutterCourse.#price = 100

flutterCourse.printSummary()
flutterCourse.publish()
