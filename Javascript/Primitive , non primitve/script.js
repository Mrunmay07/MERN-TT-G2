// Primitive

/* let userName1 = 'Akash' // 123
let userName2 = userName1 // 124
userName2 = 'Pratham'
console.log(userName1)
console.log(userName2) 
 */


// Non Primitive
// Objects , arrays

const user1 = {
    firstName:'Akash',
    lastName : 'Singh'
} // 123
const user2 = user1; // 123
user2.firstName = 'Pratham'
console.log(user1)
console.log(user2)