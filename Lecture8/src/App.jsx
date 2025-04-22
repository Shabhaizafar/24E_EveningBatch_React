import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement } from 'react';

function Data(props){
  for (const key in props.obj) {
      return <li key={props.obj[key]}>{key} : {props.obj[key]}</li>
  }
}
function App() {
  // const arr = ["HTML","CSS","JS"];
    // const obj = {
    //   Raj : 56,
    //   Ajay : 60,
    //   Vijay : 65,
    //   Shrey_Sir : 100
    // }

    var marks = [
      {Raj : 56},
      {Ajay : 60},
      {Vijay : 65},
      {Shrey_Sir : 100}
    ];
  return (
    <>
      <h1>List in a HTML</h1>
      {/* <ul>
        {arr.map((element)=>{
          return <li key={element}>{element}</li>
        })}
      </ul> */}
      <ul>
        {marks.map((element)=>{
          return <Data obj={element}/>
        })}
      </ul>
    </>
  )
}

export default App
