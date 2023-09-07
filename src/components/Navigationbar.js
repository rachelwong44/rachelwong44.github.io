import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

function Navigationbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleClickScroll = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class='fa-solid fa-laptop' /> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item-portfolio'>
              <div className='nav-links' onClick={handleClickScroll}>Portfolio</div>
            </li>
            <li>
              <Link
                to='/contact-me'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <a href='mailto:rachelwong4444@gmail.com' className='btn-mobile'>    
          {button && <Button buttonStyle='btn--outline'>CONTACT ME <i className='fa-regular fa-envelope' /></Button>}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigationbar;