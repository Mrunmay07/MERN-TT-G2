import { useEffect, useState } from "react";

function Counter() {

    const [count , setCount] = useState(0) 

    const handleClick = () => {
        setCount(count + 1)
    }

   /*  fetch('https://dummyjson.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.products)
    }) */

    async function getProducts(){
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        console.log(data.products)
    }

    useEffect(() => {
        getProducts()
    } , [])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>INCREMENT</button>
    </>
  );
}

export default Counter;
