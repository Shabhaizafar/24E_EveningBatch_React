import { useState } from "react";

function Events(){
    const [count,setCount] = useState(0);
    return(
        <>
            <input type="text" onChange={()=>{setCount(count+1);}} onFocus={()=>{setCount(100)}} onBlur={()=>{setCount(-100)}}/>
            <button onClick={()=>{setCount(count+1);console.log("Single Click")}} onDoubleClick={()=>{
                setCount(count*count);console.log("Double Click")}} >Click Here</button>
            <h3>Count : {count}</h3>
        </>
    )
}
export default Events;