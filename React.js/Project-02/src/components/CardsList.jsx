import seriesData from "../api/seriesData.json";
import Card from "./Card";
import '../styles/CardsList.css'

function CardsList() {
  return (
    <div className="container">
      {seriesData.map((currSeries) => {
        return (
          <Card
            title={currSeries.title}
            image={currSeries.image}
            rating={currSeries.rating}
            year={currSeries.year}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
