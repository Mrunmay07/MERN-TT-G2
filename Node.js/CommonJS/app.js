/* const sum = require('./sum')
const product = require('./product')

console.log(sum(3 , 4))
console.log(product(4 , 4)) */

/* const {sum , product} = require('./math') // 5s
console.log(sum(2, 2))
console.log(product(4,4))
 */

/* console.log(module.path)
console.log(module.filename)
console.log(module.paths) */

console.log("Top level code");

const res = await fetch("https://dummyjson.com/products");
const data = await res.json();
console.log(data);


