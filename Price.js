import React from "react";
import { NavLink } from "react-router-dom";
import Testmonial from "./Testmonial";
import price from './CssFile/price.css'
import {useNavigate} from 'react-router-dom';



const Price = () => {
 
  
  return (
    <>
    <section className="price-section">
      <div className="container">
      <div className="header">
        <p className="price-heading">Pricing & Plans</p>
       <h5>Local Directory Submission Pricing & Plans</h5>
        </div>
        
        <div className="pricing-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-pricing">
                  <div className="deal-type">STARTER</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>5
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>15</strong>
                    </li>
                    <li>
                      DuRation : <strong>5 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-pricing">
                  <div className="deal-type">BASIC</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>10
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>40</strong>
                    </li>
                    <li>
                      DuRation : <strong>8 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4 container-price">
                <div className="single-pricing">
                  <div className="deal-type">PRO</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>20
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>80</strong>
                    </li>
                    <li>
                      DuRation : <strong>10 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-pricing">
                  <div className="deal-type">ELITE</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>80
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>350</strong>
                    </li>
                    <li>
                      DuRation : <strong>16 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-pricing">
                  <div className="deal-type">ADVANCE</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>50
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>20</strong>
                    </li>
                    <li>
                      DuRation : <strong>13 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-pricing">
                  <div className="deal-type">PREMIUM</div>
                  <div className="deal-amount">
                    <div className="price">
                      <span className="money">
                        <sup>$</sup>60
                      </span>
                    </div>
                  </div>
                  <ul className="single-deal">
                    <li>
                      Citations: <strong>240</strong>
                    </li>
                    <li>
                      DuRation : <strong>14 Days</strong>
                    </li>
                    <li>✅ :Best Dir</li>
                    <li>✅ :Pro-Bulit</li>
                    <li>✅ :Manual</li>
                    <li>✅ :Report</li>
                  </ul>
                  <NavLink to='/citationf'>
                  <button className="pbtn">Buy Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </section>
      
      <Testmonial />
    </>
  );
};

export default Price;
