import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Bigbutton from 'components/Bigbutton/Bigbutton'

const Navbar = () => {


  return (
    <nav className="Navbar">
      <div className="Navbar__links">
        <Link to="/" exact>Home</Link>
        <Link to="/about" exact>About</Link>
        <Link to="/works" exact>Projets</Link>
      </div>
      <Bigbutton />
    </nav>
  );
};

export default Navbar;
