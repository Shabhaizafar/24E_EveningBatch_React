import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layouts() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">ShoeStyle</div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/productdetails">Product Details</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export default Layouts;
