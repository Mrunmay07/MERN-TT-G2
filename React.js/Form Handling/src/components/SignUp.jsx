import { useState } from "react"

function SignUp(){

  /*   const [firstName ,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('') */

    const [user , setUser] = useState({
        firstName : '',
        lastName : '',
        email:'',
        password:''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
       console.log('Form submitted')

       const formData = {
        fName : user.firstName,
        lName:user.lastName,
        email:user.email,
        password : user.password
       }
       console.log(formData)
    }

    const handleChange = (e) => {
        const {name , value}= e.target

        setUser((prev) => ({...prev,[name]:value}))


    }

    return(
        <form onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input type="text" value={user.firstName} onChange={handleChange} name="firstName"/>

            <br />

            <label>LastName</label>
            <input type="text" value={user.lastName} onChange={handleChange} name="lastName"/>

            <br />
            <label>Email</label>
            <input type="text" value={user.email} onChange={handleChange} name="email" />
            
            <br />

            <label>Password</label>
            <input type="text" value={user.password} onChange={handleChange} name="password"/>

            <br />
            <button>SingUp</button>
        </form>
    )
}

export default SignUp