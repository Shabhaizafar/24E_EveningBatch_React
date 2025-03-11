import { useState } from 'react';
import './Hook1.css'

function Hook1(){
    const [count,setCount] = useState(300);
    return(
        <>
            <div className="block">
                <span>Your Counter is : {count}</span>
                <button onClick={()=>{setCount(count+100)}}>+</button>
                <button onClick={()=>{setCount(count-1)}}>-</button>
            </div>

        </>
    )
}
export default Hook1;