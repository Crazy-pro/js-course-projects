function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(Math.random())
console.log(randomIntBetween(5, 10))