import React from "react";

const Services = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">
          OUR <span>Services</span>
        </h1>
        <p className="sub-text"></p>
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/first.jpg" />
              </div>
              <h2>Enterprise solutions</h2>

              <p className="service-pg">
                We designed enterprise solutions to integrate multiple facets of
                a company's business through the interchange of information from
                various business process areas and related databases.
              </p>
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/second.jpg" />
              </div>
              <h2>Web Development</h2>

              <p className="service-pg">
                We have vast experience in developing web applications using
                Microsoft stack and Mean stack besides responsive technologies.
              </p>
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./images/three.jpg" />
              </div>
              <h2>Mobile app development</h2>

              <p className="service-pg">
                We develop robust mobile apps, while also delivering maintenance
                and security on a robust architecture.
              </p>
            </div>
          </div>
          
            <div className="col s12 m6 14">
              <div className="single-service center-align">
                <div className="img-area">
                  <img alt="" src="./images/four.jpg" />
                </div>
                <h2>Digital Marketing</h2>

                <p className="service-pg">
                  Our full-service digital marketing agency offers affordable
                  and effective digital marketing plans. We work to deliver
                  improved rankings, increased traffic, Keyword optimization,
                  citation management, back linking and, in turn, more business.
                </p>
              </div>
            </div>

            <div className="col s12 m6 14">
              <div className="single-service center-align">
                <div className="img-area">
                  <img alt="" src="./images/five.jpg" />
                </div>
                <h2>Desktop Application</h2>

                <p className="service-pg">
                  Our desktop developers have developed versatile applications
                  like POS, inventory and accounting systems etc.
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Services;
