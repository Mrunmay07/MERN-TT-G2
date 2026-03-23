import '../styles/Card.css'

function Card({ title, year, rating, image }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2 style={{color:"red" , fontWeight:"bold" , backgroundColor:"skyblue"}}>{title}</h2>
      <p>{year}</p>

      <p className={rating > 8 ? "more":"less"}>{rating}</p>
      <button>Watch Now</button>
    </div>
  );
}

export default Card;
