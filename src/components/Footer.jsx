import React from 'react';
import footerimg from './images/footerimg.jpg'
import Logos from './Logos';

const Footer = () => {
  return (
      <div className="footer-container">
          {/* <div className="footerimg-div">
                <img src={footerimg} alt="" />
          </div> */}
          <div className="footercontent-div">
            <div className="footer-links">
                <span>Call: 8750718133</span>
                <span>Email: vishnu.cse20@satyug.edu.in</span>
                <span><a href="/">contact us</a></span>
            </div>
                     {/* <Logos/> */}
            <h2 style={{color:"#ffff"}}>Created with💖@vishnu vashishth </h2>
          </div>
      </div>
  );
};

export default Footer;
