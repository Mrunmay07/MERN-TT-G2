import { NavLink } from "react-router-dom";
import "../../styles/Card.css";

function Card({ currMovie }) {
  return (
    <div className="card">
      <img src={currMovie.Poster} alt="" />
      <h1>{currMovie.Title}</h1>
      <p>{currMovie.Year} Year</p>
      <p>{currMovie.imdbID}</p>
     
     <NavLink to={`/movies/${currMovie.imdbID}`}>
       <button>Watch Now</button>
     </NavLink>
    </div>
  );
}

export default Card;
