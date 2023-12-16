const movies = document.getElementById('movie-list')

movies.style['background-color'] = 'red'
movies.style.display = 'block'

const person = {
  'first Name': 'Alex',
  'age': 25,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
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

console.log(person)
console.log(person['first Name'])
console.log(person[1.5])