/* for(let i = 0 ; i < fruits.length ; i++ ){
    console.log(fruits[i])
} */

// for of loop
// arrays , strings

/* for(let fruit of fruits){
    console.log(fruit)
}
 */
//for in loop
// Objects

/* const users = {
    firstName : 'Pratham',
    lastName : 'Kumar'
}

for(let user in users){
    console.log(users[user])
} */

const fruits = ["apple", "mango", "banana"];

const result = fruits.forEach((element , index)=> {
    console.log(element , index)
    return 'Hello'
})

console.log(result)
// Array method
// higher order function 
// return undefined
