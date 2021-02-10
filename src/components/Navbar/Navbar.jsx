import React from 'react';
import './Navbar.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bigbutton from 'components/Bigbutton/Bigbutton';
import DayNight from 'components/DayNight/DayNight';
import logo from './img/theagency_logo.svg';

const Navbar = () => {

const currentState = useContext(ModeContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <div className="Navbar__left">
          <img className={`Navbar__left__logo`} src={logo} />
          <p className="Navbar__left__title">The Agency Project</p>
        </div>
      </Link>
      <div className={`Navbar__right ${currentState}`}>
        <Link to="/about">About</Link>
        <Link to="/works">Projets</Link>
        <Bigbutton />
        <DayNight />
      </div>
      
    </nav>
  );
};

export default Navbar;
