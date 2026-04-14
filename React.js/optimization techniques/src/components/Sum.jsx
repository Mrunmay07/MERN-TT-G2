import { memo } from "react";
    

function Sum(){

    function calculateSum(){
        let sum = 0 
        for(let i = 0 ; i < 100 ; i++){
            sum += i;
        }
        return sum
    }

    const total = calculateSum()

    console.log('Sum component rendered')

    return (
        <h1>Sum is : {total}</h1>
    )

}

export default memo(Sum)