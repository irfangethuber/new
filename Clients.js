import React from 'react'
import client from './CssFile/client.css'

const Client = () => {
  return (
	<>
	      <div className="container">
        <h1 className="header">
           <span>Our </span> Client
          <span> <hr/></span>
        </h1>
        <p className="sub-text"></p>
        <div className="row">
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./cimage/calimate.png" />
              </div>
            
            </div>
          </div>

          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./cimage/samsung.png" />
              </div>
             
            </div>
          </div>
          <div className="col s12 m6 l4">
            <div className="single-service center-align">
              <div className="img-area">
                <img alt="" src="./cimage/softsolution.png" />
              </div>
             
            </div>
          </div>
          
            <div className="col s12 m6 14">
              <div className="single-service center-align">
                <div className="img-area">
                  <img alt="" src="./cimage/symentec.png" />
                </div>
                
              </div>
            </div>

            <div className="col s12 m6 14">
              <div className="single-service center-align">
                <div className="img-area">
                  <img  alt="" src="./cimage/universal.png" />
                </div>
               
              </div>
            </div>
         </div>
		 </div>
		
        
     
    </>
	
	
  )
}

export default Client