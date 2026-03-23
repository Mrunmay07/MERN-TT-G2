// Object -> Non Primitive Data Type
const user = {
    firstName : 'Pratham',
    lastName : 'Kumar',

    address : {
        city : 'Bhilai',
        state : 'Chattisgarh'
    }
}

// Object Access
console.log(user.lastName) // dot notation
console.log(user['firstName']) // bracket notation
console.log(user.address.city)

user.firstName = 'Akash'
console.log(user)
