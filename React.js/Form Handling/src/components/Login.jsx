import { useState } from "react"

function Login(){

    const [user , setUser] = useState({
        email:'',
        password:''
    })    

    const handleChange = (e) => {
        const {name , value}= e.target

        setUser((prev) => ({...prev ,[name]:value}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        const formData = {
            Email : user.email,
            Password : user.password
        }

        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" value={user.email} onChange={handleChange} name="email" />

            <br />

            <label>Password</label>
            <input type="text" value={user.password} onChange={handleChange} name="password" />

            <br />

            <button>Login</button>
        </form>
    )
}

export default Login