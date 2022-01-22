import React from 'react';
import { AiOutlineMail,AiOutlineWhatsApp,AiFillGithub,AiFillFacebook,AiFillLinkedin } from 'react-icons/ai';


const Logos = () => {
  return (
      <div className="logo-div">
        <a href="http://" target="_blank" rel="noopener noreferrer">{ <AiOutlineMail/>}</a>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer">{ <AiOutlineWhatsApp/>}</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">{ <AiFillFacebook/>}</a> */}
        <a href="http://" target="_blank" rel="noopener noreferrer">{ <AiFillGithub/>}</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">{ <AiFillLinkedin/>}</a>
      </div>
  );
};

export default Logos;
