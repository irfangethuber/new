import React from "react";
import {NavLink} from "react-router-dom"
import Ourteam from './CssFile/Ourteam.css'

const Our_team = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">
          EAST & WEST <span>TEAM</span>
        </h1>
        <p className="sub-text"></p>
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/sharif.png" />
              </div>
              <h2>Sharif Awan</h2>
              <h3>
                <span>CEO</span>
              </h3>
             
              <p className="pg">
                Sharif, Founder & CEO of East and west, partnered with a
                corresponding company in US and has been running a successful
                offshore business since 2007 with his incredible entrepreneurial
                skills.
              </p>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/saif.jpg" />
              </div>
              <h2>Saif Ur Rehman</h2>
              <h3>
                <span>CTO</span>
              </h3>
              <h4>software Engineer</h4>
              <p className="pg">
                Saif has a versatile software industry experience.He is working
                as architect and designer of multitenant saas solutions.
              </p>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/kifayat.jpg" />
              </div>
              <h2>Kifayat Ullah</h2>
              <h4>Senior Software Engineer</h4>
              <p className="pg">
                Kifayat is a tenacious Technical Manager with over 15 years of
                Development and Management experience, currently working as our
                Senior software engineer
              </p>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/Ali.jpg" />
              </div>
              <h2>Dr Ali Shah</h2>
              <h4>Software Architect</h4>
              <p className="pg">
                Dr. Ali is an NZ qualified PhD in Computer Science having 10
                years of experience in web design and development. He is working
                as a solution architect.
              </p>
            </div>
          </div>

          <div><h1 className="header"> OUR <span>OFfICES</span></h1></div>
		  <div className="row">
		  <div className="col s12 m6 l4">
			<h3 className="offices-heading">Pakistan</h3>
			<ul className="list-item">
				<li>Office #05 Gull Center NBP Street</li>
				<li>Paharpur</li>
				<li>Dera Ismail Khan</li>
				<li>KPK Pakistan</li>
				<li> +92 300 514 7454</li>

			</ul>
			
		  </div>

		  <div className="col s12 m6 l4">
			<h3 className="offices-heading">United Kingdom</h3>
			<ul className="list-item">
				<li>Kemp House, 160 City Road</li>
				<li>London,</li>
				<li>EC1V 2NX UNITED KINGDOM</li>
				
				<li> +44 778 432 8643</li>

			</ul>
			
		  </div>

		  <div className="col s12 m6 l4">
			<h3 className="offices-heading">Dubai</h3>
			<ul className="list-item">
				<li>Technohub, Dubai Silicon Oasis-</li>
				<li>Dubai , United Arab Emirates</li>
				
				<li> +97 1521 740509</li>

			</ul>
			
		  </div>
		  


		  </div>
      <div className="btn">
			<NavLink to='/contact'>Get IN Touch</NavLink>
		  </div>
        </div>
      </div>
    </>
  );
};

export default Our_team;
