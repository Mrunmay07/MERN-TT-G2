// Asynchronous code 
// JS -> single threaded

/* setTimeout(() => {
    console.log('Hi 2')
} , 5000)


console.log('Hi 3')


setTimeout(() => {
    console.log('Hi 1')
}, 4000 )
 */


// Synchronous code 
// line by line execute
// JS execute karta hai

//Asynchronous code
// execute browser



const timerId = setInterval(() => {
    console.log('Hello world')
} , 3000)
console.log(timerId)