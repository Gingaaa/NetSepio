
import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return <div >
       <nav className="navbar navbar-expand-lg nav ">
        <div className="container-fluid">
          <img
            className="img"
            src="https://user-images.githubusercontent.com/69159515/163665970-6207901c-4c18-4b17-b048-8691d2132832.png"
            alt="error"
          />
          <h3 className="navbar-brand text">NetSepio</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ho">
                <Link className="nav-link text"  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/Features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/Specifications">
                  Specifications
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>;
}
