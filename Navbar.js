import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";



const Navbar = () => {
 
 

    const [show,setShow] = useState(false);
  return (
    <>
     <div className="m-div">
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary display-fixed mt-1  ">
          <div className="container ">
         
            <NavLink className="navbar-brand" to="/home">
              <span className="span1"> E </span> 
              <span className="span2"> & </span> 
              <span className="span3"> W </span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            onClick={()=>setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className= {`collapse navbar-collapse ${show ? "show" :  " " }`}
             
            >
              <ul className="navbar-nav ms-auto mb- mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfoolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                   About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/price">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/team">
                    Our_team
                  </NavLink>
                </li>
                
                
                
              </ul>
            </div>
           
          </div>
          </nav>
          </div>
        
    
    </>
  );
};

export default Navbar;
