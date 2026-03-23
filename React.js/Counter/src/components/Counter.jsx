import { useEffect, useState } from "react";

function Counter() {


/*  const [state , setState]= useState(1)
 console.log(state , setState) */

 const [count , setCount] = useState(0)

  function handleIncrement(){
    setCount((prev) => prev + 1 )
    setCount((prev) => prev + 1 )
   
  }



  const handleDecrement = () => {
    setCount(count - 1)
  }
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>

      <button onClick={handleDecrement}>DECREMENT</button>
    </>
  );
}

export default Counter;
