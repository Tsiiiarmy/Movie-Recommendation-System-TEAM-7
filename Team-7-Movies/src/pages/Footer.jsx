import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1F1E2B',
    position:'relative',
    color: '#fff',
    padding: '20px',
    fontSize: '20px',
    width: '99%', 
    height: '200px', 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    fontFamily: 'Arial, sans-serif',

  };

  const leftContentStyle = {
    textAlign: 'left', 
  };

  const rightTopStyle = {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const rightBottomStyle = {
    textAlign: 'right',
  };


  const iconStyle = {
    marginLeft:'20px',
    marginRight: '10px',
    color: '#fff', 
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '10px',
    paddingLeft:'40px'
  };

  return (
    <div style={footerStyle}>
      <div>
       <h2>READY FOR <br /> <span style={{ color: 'red' }}>POPULAR</span> MOVIES? </h2> 
      <div>
        <a href="mailto:team7@gmail.com" style={linkStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> team7@gmail.com
        </a>
      </div>
      </div>
      <div>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a href="#" style={iconStyle}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a href="https://github.com/Tsiiiarmy/Movie-Recommendation-System-TEAM-7" style={iconStyle}>
          <FontAwesomeIcon icon={faGithub} />
        </a>

      </div> <br />
      <div>
        <a href="#" style={linkStyle}>Privacy Policy</a>
        <span style={{ marginLeft: '5px', marginRight: '5px' }}> | </span>
        <a href="#" style={linkStyle}>Terms and Conditions</a>
      </div>
    </div>
  );
};



export default Footer;
