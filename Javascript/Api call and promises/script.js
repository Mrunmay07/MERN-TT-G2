const p = new Promise((resolve , reject) => {
   reject('Hello')
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
.catch(() => {
    console.log('Promise Rejected')
})