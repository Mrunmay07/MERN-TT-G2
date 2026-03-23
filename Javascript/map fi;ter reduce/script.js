// map() , filter() , reduce()
// Array methods


// [3 , 4 , 5 , 6 ,7]
/* 
const result = numbers.map((num) => {
    return num+2
})
console.log(result)
 */

// ['AKASH', 'PRATHAM' , 'ANSH']
/* const result2 = names.map((name) => {
    return name.toUpperCase()
})

console.log(result2)

 */



// [3 , 4 ,5 ]
/* const result = numbers.filter((num) => {
    return num > 2
})
console.log(result) */

const names = ['akash' , 'pratham' , 'ansh']
// ['akash' , 'ansh']
/* const result2 = names.filter((name) => {
    return name.startsWith('a')
})
console.log(result2)

// ['akash' , 'ansh'] */


// 15
// reduce()

//accumulator 
// current

/* const result = numbers.reduce((acc , curr) => {
    return acc + curr
    } , 10)
    
    console.log(result) */
    
const numbers = [1,2,3,4,5]
// [3 , 4 , 5 ] => 12

const result = numbers.filter((num) => {
    return num > 2
}).reduce((acc , curr) => {
    return acc + curr
})

console.log(result)

