import seriesData from "../api/seriesData.json";
import Card from "./Card";
import '../styles/CardsList.css'
import { useEffect, useState } from "react";

function CardsList() {

  const [productsData , setProductsData] = useState([])

  async function getProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data.products)
    setProductsData(data.products)
  }

  useEffect(() => {
    getProducts()
  } , [])


  return (
    <div className="container">
      {productsData.map((currSeries) => {
        return (
          <Card
            key={currSeries.id}
            title={currSeries.title}
            image={currSeries.images[0]}
            rating={currSeries.rating}
            year={currSeries.year}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
