import React from "react";
import { NavLink } from "react-router-dom";
import "./CssFile/portfolio.css";

const Portfolioo = () => {
  return (
    <>
    <section className="prot-section">
      <div className="m-heading">
        <h1 >OUR PROJECTS</h1>
      </div>

      <div className="wrapper">
        <div className="box">
          <div className="single-box">
           
            
            <h3>BIZLINK</h3>
            <h3>(Proposal Management System)</h3>
            <p>
              This system helps the companies to manage their past performance,
              proposal management, team building and B2B network activities.
            </p>

           <a href="https://zbizlink.com/"target="-blank">View</a>
          </div>
          <div className="single-box">
           
            <h3>CALIBER MATRIX</h3>
            <h3>(A project management software like JIRA)</h3>
            <p>
              Caliber Matrix is a project management software like JIRA. It
              includes all aspects of project management.
            </p>

            <a href="https://calimatic.com/" target="_blank">view</a>
          </div>
          <div className="single-box">
            
            
            <h3>BS-DIGITAL</h3>
            <h3>(Online Shopping Website)</h3>
            <p>
              This system helps the companies to manage their past performance,
              proposal management, team building and B2B network activities.
            </p>

            <a href="http://bsdigital.pk/" target="_blank">View</a> 
          </div>
          
          <div className="single-box">
           
            <h3>EW SCHOOL</h3>
            <h3>(Online School Management System)</h3>
            <p>
              EW School System is a robust application, which automate the all
              the aspects of an institution from registering a student to
              issuing school leaving certificate.
            </p>

            <a href="http://ewschooling.com/" target="_ blank">View</a>
         </div>
         
         </div>
         </div>
          
         </section>
      
    </>
  );
};

export default Portfolioo;
