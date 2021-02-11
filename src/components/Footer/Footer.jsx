import React from 'react';
import './Footer.scss';
import { useContext } from 'react';
import ModeContext from 'components/ModeContext/ModeContext';



const Footer = () => {

const currentState = useContext(ModeContext);

  return (
    <nav className="Footer">
      <p className="Footer__text">THP Next 2021</p>
    </nav>
  );
};

export default Footer;
