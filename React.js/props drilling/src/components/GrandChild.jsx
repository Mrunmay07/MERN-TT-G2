import { useContext } from "react"
import { Context } from "../context/ContextProvider"

function GrandChild(){

    // useContext
    const {name , age} = useContext(Context)
    return(
        <h1>My name is {name} adn my age is {age} </h1>
    )
}

export default GrandChild