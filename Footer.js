import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2 className="fw-bold">Pakistan</h2>
                  <ul>
                    
                    <li>Office #05 Gull Center NBP Street Paharpur</li>
                    <li> Dera Ismail Khan KPK Pakistan</li>
                    <li> +92 300 514 7454</li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2 className="fw-bold">United Kingdom</h2>
                  <ul>
                    <li>
                    Kemp House, 160 City Road
                      </li>
                    
                    <li>
                      London
                    </li>
                      <li>
                      EC1V 2NX UNITED KINGDOM
                      </li>
                      <li> Phone:+44 778 432 8643</li>
                  
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2 className="fw-bold">Dubai</h2>
                  <ul>
                    <li>
                    Technohub, Dubai Silicon Oasis-
                    </li>
                    <li>
                    Dubai , United Arab Emirates
                    </li>
                    <li>
                    +97 1521 740509
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2 className="fw-bold">Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a href="https://web.facebook.com/EastandWest786" target="_blank">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="" target="_blank">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-github fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                    <a href="https://twitter.com/eastandwestseo" target="_blank">
                      <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center fw-bold">
                  Copyright @ 2022 Saif Team. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
