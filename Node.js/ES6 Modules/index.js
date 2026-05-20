/* import sum from './math.js'
import {product, sub} from './math.js'

console.log(product(2,3))
console.log(sub(4, 2)) */

const res = await fetch("https://dummyjson.com/products");
const data = await res.json();
console.log(data);
