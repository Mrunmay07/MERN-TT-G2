import { useId, useRef } from "react"

function SignUp(){

    const userName = useRef(null)
    const password = useRef(null)


    const id = useId()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName.current.value , password.current.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text" id={id + "userName"} ref={userName}/>

            <br />

            <label>Password</label>
            <input type="text" id={id + "password"} ref={password}/>

            <br />

            <button>SignUp</button>
        </form>
    )
}

export default SignUp