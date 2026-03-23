// Promises 

// Promises are objects that tells the eventual completion and failure of any asynchronous task

const p = new Promise((resolve  ,reject) => {
    resolve('Hello world')
})
console.log(p)
p.then((data) => {
    return data.toUpperCase()
})
.then((data2) => {
    return data2.toLowerCase()
})
.then((data3) => {
    console.log(data3)
})
.catch((data) => {
    console.log(data)
})
/* .finally(() => {
    console.log('Hello')
}) */


