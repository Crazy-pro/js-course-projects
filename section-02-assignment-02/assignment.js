const task3Element = document.getElementById('task-3')

function greet() {
  alert('Hi all!')
}

function greetUser(userName) {
  alert('Hi ' + userName)
}

function combine(str1, str2, str3) {
  return `${str1} - ${str2} - ${str3}`
}

greetUser('Max')

task3Element.addEventListener('click', greet)

alert(combine('Hi', 'there', '!'))