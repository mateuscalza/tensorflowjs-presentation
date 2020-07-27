const generateArray = size => Array.from(Array(size)).map((value, index) => index)

const numbers = generateArray(10000000)

const start = +new Date()
const sum = numbers.reduce((acc, value) => acc + value, 0)
const c = numbers.map(value => value / sum * 1000)

console.log(c)
console.log((+new Date() - start) / 1000)

