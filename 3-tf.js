const tf = require('@tensorflow/tfjs-node')

const generateArray = size => Array.from(Array(size)).map((value, index) => index)

const numbers = generateArray(10000000)

const start = +new Date()
const numbersTensor = tf.tensor(numbers)
const sum = numbersTensor.sum()
const c = numbersTensor.div(sum).sqrt()

c.print()
console.log((+new Date() - start) / 1000)

