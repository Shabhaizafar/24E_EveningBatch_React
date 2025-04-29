import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Layouts from './Components/Layouts'
import ReactDOM from "react-dom/client";
import Product from "./Components/Product";
import Productdetails from "./Components/Productdetails";

export default function App(){
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layouts/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/product' element={<Product/>}/>
                  <Route path='/productdetails' element={<Productdetails/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);
