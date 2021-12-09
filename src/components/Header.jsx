import React from "react";
import '../styles/Header.css';
import icono from'../assets/img/icono.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link className="nav-item" to={"/"}><img src= {icono} height="50px"/></Link>
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/lista"} >Movies</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  );
};

export default Header;
