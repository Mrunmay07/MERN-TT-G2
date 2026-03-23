// Spread operator

// 123
/* const user1 = {
    firstName : 'Pratham',
    lastName : 'Kumar'
}

const user2 = {...user1} // 124
user2.firstName = 'Akash'
console.log(user1)
console.log(user2) */

/* const fruits1 = ['apple' , 'mango' , 'orange'] // 123
const fruits2 = [...fruits1] // 124
fruits2[0] = 'kiwi'
console.log(fruits1)
console.log(fruits2) */

// Rest parameters

// c = [2 , 4 , 10]
function sum(a ,b , ...c){
    let total = a + b // 3 + 4+2 + 4  + 10
    for(let val of c){
        total += val
    }
    return total
}

const result = sum(3 , 4 , 2 , 4 , 10)
console.log(result)