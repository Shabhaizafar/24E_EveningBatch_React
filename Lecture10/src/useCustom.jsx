import { useState } from "react";

function useCustom(intialValue = 100){
    const [counter,setCounter]= useState(intialValue);

    const increment = ()=>{ setCounter(counter+1) };
    const decrement = ()=>{ setCounter(counter-1) };
    const reset = ()=>{ setCounter(intialValue) };

    return {counter,increment,decrement,reset};
}


export default useCustom;