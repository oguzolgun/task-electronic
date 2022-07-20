import React from "react";
// import { Link} from "react-router-dom";
// import styles from "./Navbar.module.css";
import{useNavigate} from "react-router-dom";


const Navbar = () => {
    const navigate= useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <button className="nav-link active" aria-current="page" onClick={()=>navigate("/") }>Home</button>
        <button className="nav-link active" aria-current="page" >Login</button>
    
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;