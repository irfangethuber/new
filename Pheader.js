import React from "react";
import { NavLink } from "react-router-dom";
import Services from "./Services";

const Pheader = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                <strong className="gr">Enterprise </strong>{" "}
                <span className="yr"> solutions</span>
              </h1>
              <p className="main-hero-para">
                We designed enterprise solutions to integrate multiple facets of
                a company's business through the interchange of information from
                various business process areas and related databases
             </p>
            </div>
          </div>
          {/*  --------------- main header right side--------------  */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img src="./images/hero3.png" alt="heroimg" className="img-fluid" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Pheader;
