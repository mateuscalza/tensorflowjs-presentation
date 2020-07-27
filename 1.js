// Image source: javatpoint apud https://papers.bastolasushan.com/what-are-tensors/

const tf = require('@tensorflow/tfjs-node')

const a = tf.tensor(2)
const b = tf.tensor(5)

const c = a.mul(b)

c.print()
