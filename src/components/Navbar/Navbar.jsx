import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav>
      <h1>Coucou Navbar</h1>
      <Link to="/" exact>Home</Link>
      <Link to="/about" exact>About</Link>
      <Link to="/works" exact>Projets</Link>
    </nav>
  );
};

export default Navbar;
