import { useLoaderData } from "react-router-dom"
import Card from "../components/ui/Card"
import '../styles/Movies.css'

function Movies(){

    const movies = useLoaderData()
    console.log(movies.Search)
    return(
        <>
            <ul className="cards-container">
                {
                    movies.Search.map((currMovie) => {
                     return <Card currMovie={currMovie}/>   
                    })
                }
            </ul>
        </>
    )
}

export default Movies