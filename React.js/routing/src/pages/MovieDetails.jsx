import { useLoaderData } from "react-router-dom"

function MovieDetails(){

    const movieDetails = useLoaderData() // Object


    return(
        <>
            <h1>{movieDetails.Actors}</h1>
            <h1>{movieDetails.Title}</h1>
            <img src={movieDetails.Poster} alt="" />
            <h1>{movieDetails.Plot}</h1>
            <p>{movieDetails.MetaScore}</p>

        </>
    )
}

export default MovieDetails