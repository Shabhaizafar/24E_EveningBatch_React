import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Service from './Service'
import Contact from './Contact'
function App() {
  var [count,setCount] = useState(0);

  return (
    <>
      <section className="parent">
        <nav className="navbar">
          <div className="logo">MyLogo</div>
          <div className="nav-links">
            <span onClick={()=>{setCount(count=1)}}>Home</span>
            <span onClick={()=>{setCount(count=2)}}>About</span>
            <span onClick={()=>{setCount(count=3)}}>Services</span>
            <span onClick={()=>{setCount(count=4)}}>Portfolio</span>
            <span onClick={()=>{setCount(count=5)}}>Contact</span>
          </div>
        </nav>
        <div className="container">
          <aside className="sidebar">
            <h3>Sidebar</h3>
            <ul>
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Messages</li>
              <li>Profile</li>
              <li>Help</li>
            </ul>
          </aside>
          <main className="main">
            {/* Count : {count} */}
            {(count==1) && <Home/>}
            {(count==2) && <About/>}
            {(count==3) && <Service/>}
            {(count==4) && <Portfolio/>}
            {(count==5) && <Contact/>}
          </main>
        </div>
      </section>
    </>
  )
}

export default App
