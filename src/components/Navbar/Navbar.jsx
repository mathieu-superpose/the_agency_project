import React from 'react';
import './Navbar.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'components/Toggle/Toggle'
import logo from './img/theagency_logo.svg';

const Navbar = () => {
  const [toggled, setToggled] = useState();
  const currentState = useContext(ModeContext);

  useEffect(() => {
    console.log(currentState.currentState);
    if (currentState.currentState==='Dark') setToggled(true);
    if (currentState.currentState!=='Dark') setToggled(false);
  }, []);

  const handleClick = () => {
      setToggled((s) => !s);
      currentState.setDayNight();
  };

  return (
    <nav className="Navbar">
        <div className="Navbar__left">
          <Toggle toggled={toggled} onClick={handleClick} />
          <Link to="/">
          <p className={`Navbar__left__title ${currentState}`}>The Agency Project</p>
          </Link>
        </div>
      <div className={`Navbar__right ${currentState}`}>
        <Link to="/about">L'agence</Link>
        <Link to="/works">Projets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
