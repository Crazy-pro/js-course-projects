const person = {
  name: 'Alex',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
}

person.isAdmin = true
person.age = 26
// delete person.age
// person.age = undefined
// person.age = null
person.greet();

console.log(person)