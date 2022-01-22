import React from 'react';
import registerimage1 from './images/register1.png';
import formlogo from './images/form-logo.png';
import Form from './form';

const Registeration = () => {
  return (
    <div className='registeration-section'>
      <div className="register-container">
        <div className="registerimg">
          <img src={registerimage1} alt="" />
        </div>

        <div className="form-container">
          <h1 style={{ color: "#38B9F8", margin: "2rem" }}>Register to Join Our Community</h1>
          <div className="form-logo">
            <img src={formlogo} alt="" />
          </div>
          <Form />
            
        </div>

      </div>
    </div>
  );
};

export default Registeration;
