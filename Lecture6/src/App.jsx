import { useState } from 'react'
import './App.css'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
function App() {
  var [count,setCount] =  useState(0);
  return (
    <>

        <h1>Conditional Rendering : {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        {/* <h2>Using Ternary Operator</h2> */}
        {/* {(count>5) ? <Comp1/> :<Comp2/>} */}
        <h2>Using AND Operator (required All are True)</h2>
        {/* {<Comp1/> && count==5 && <Comp2/>} */}
        <h2>Using Switch Case</h2>
        {
          (function (){
            switch (count) {
              case 1: return <Comp1/>
              case 2 : return <Comp2/>
              default : return <h2>Nothing</h2>
            }
          })()
        }
    </>
  )
}

export default App

//  condition ? statement1 : statement2

//  condition ?   component1 : component2