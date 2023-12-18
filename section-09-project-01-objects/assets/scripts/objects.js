const movies = document.getElementById('movie-list')

movies.style['background-color'] = 'red'
movies.style.display = 'block'


const userChosenKeyName = 'acces lvl'

const person = {
  'first Name': 'Alex',
  'age': 25,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello'
}

person.isAdmin = true
person.age = 26
// delete person.age
// person.age = undefined
// person.age = null
person.greet();

const keyName = 'first Name'
console.log(person)
console.log(person[keyName])
console.log(person.keyName)
console.log(person[1.5])