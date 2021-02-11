import React from 'react';
import './Footer.scss';
import { useContext } from 'react';
import ModeContext from 'components/ModeContext/ModeContext';



const Footer = () => {

const currentState = useContext(ModeContext);

  return (
    <nav className="Footer">
      
    </nav>
  );
};

export default Footer;
