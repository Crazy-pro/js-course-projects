function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(Math.random())
console.log(randomIntBetween(5, 10))

function productDescription(strings, productName, productPrice) {
    console.log('strings', strings)
    console.log(productName)
    console.log(productPrice)
    let priceCategory = 'pretty cheap'
    if (productPrice > 20) {
        priceCategory = 'fairly priced'
    }
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
    return { name: productName, price: productPrice }
}

const productName = 'Course'
const productPrice = 29.99

const productOutput = productDescription`This product (${productName}) is ${productPrice}.`

console.log(productOutput)
