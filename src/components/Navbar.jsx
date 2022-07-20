import React from "react";
// import { Link} from "react-router-dom";
// import styles from "./Navbar.module.css";
import{useNavigate} from "react-router-dom";


const Navbar = () => {
    const navigate= useNavigate();
  return (
    <nav className="navbar bg-secondary">
      <form className="container-fluid ">

        <button 
        type="button" 
        className="btn btn-outline-warning btn-lg " 
        onClick={()=>navigate("/") }>Home</button>
 
        <button 
        type="button" 
        className="btn btn-outline-warning btn-lg " 
        onClick={()=>navigate("/") }>Login</button>
  
      </form>
    </nav>
  );
};

export default Navbar;
