import React from 'react';
import {Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
           <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
             <Link to="/" className="navbar-brand"> Debby's <i className="fas fa-utensils" style={{color: 'teal', width:'20px', height:'20px'}}></i> Ideal</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                         <Link to="/" className="nav-link text-white">Home </Link>
                    </li>
                    <li className="nav-item">
                         <Link to="/meal" className="nav-link text-white" >Featured Meal</Link>
                    </li>
                    
                </ul>
                
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
