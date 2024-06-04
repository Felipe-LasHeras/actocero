import React from "react";
import { Link, Navigate , useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          ACTOCERO (logo)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
        <Link to="/Obras" className="navbar"> 
            <a className="nav-link text-light" aria-current="page" href="#">
              ACTOCERO
            </a>
        </Link>
            <a className="nav-link text-light" href="#">
              Integrantes
            </a>
            <Link to="/Obras" className="navbar"> 
            <a className="nav-link text-light" href="#">
              Obras
            </a>
            </Link>
            <a className="nav-link text-light" href="#">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
