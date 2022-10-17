import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import './Navbar.css';
import HomeButton from '../HomeButton/HomeButton';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
      <Link to="/">
        <HomeButton />
      </Link>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <li className="items"><Link to="/about" onClick={toggleNav}>About</Link></li>
        <li className="items"><Link to="/learn" onClick={toggleNav}>Learn</Link></li>
        <li className="items"><Link to="/support-us" onClick={toggleNav}>Support Us</Link></li>
        <li className="items"><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
      </ul>
      )}

      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={toggleNav} className="btn">
        {toggleMenu ? (
          <MdClose className="btnIcon" />
        ) : (
          <FiMenu className="btnIcon" />
        )}
      </button>
    </nav>
  );
}
