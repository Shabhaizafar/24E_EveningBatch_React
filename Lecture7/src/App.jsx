import { useState } from 'react'
import './App.css'

function Image1(props){
  var arr = ["https://imgs.search.brave.com/b48Rjkzqd2e7Yc7OUdAVG6_qRRneOvEMRAehHVisvjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYW0u/dGhkc3RhdGljLmNv/bS9jb250ZW50L3By/b2R1Y3Rpb24vYUlq/Wk91UktTYl9Qb3Jt/ZHR6d1NnZy9BUjBo/ZVBOdGpnVHp3WVFM/bnpMS1BRL29wdGlt/aXplZEZpbGUvMzc1/YzUzY2ItNjdhZS00/NTU2LWE2ZDQtMWMy/MzU4ODRkMmRhX05V/MTQwNV9Sb29tXzUu/anBlZz9pbT1SZXNp/emU9KDcwMywzOTUu/NDQp","https://imgs.search.brave.com/jJ5UQJwt8hFWSntb-2aHUfqedt_WqQ2BnP4JzXsMmcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn"];      
      return <img src={arr[props.value]} alt="" />;
}
function App() {
  var [count,setCount] = useState(-1);
  return (
    <>
      <h1>Using Switch Case : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click Here</button><br />
        <Image1 value ={count}/>
{/* 
      {
        (function(){
          switch (count) {
            case 1: return Image1();
          }
        })()
      } */}
    </>
  )
}

export default App
