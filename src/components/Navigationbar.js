import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigationbar.css';

function Navigationbar() {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => handleScrollTo('portfolio'), 100);
    } else {
      handleScrollTo('portfolio');
    }
    closeMobileMenu();
  };

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => handleScrollTo('home'), 100);
    closeMobileMenu();
  };

  const handleAboutClick = () => {
    navigate('/about-me');
    setTimeout(() => handleScrollTo('about'), 100);
    closeMobileMenu();
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fa-solid fa-laptop' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <div onClick={handleHomeClick} className='nav-links'>Home</div>
            </li>
            <li className='nav-item'>
                <div onClick={handleAboutClick} className='nav-links'>About Me</div>
            </li>
            <li className='nav-item'>
                <div onClick={handlePortfolioClick} className='nav-links'>Portfolio</div>
            </li>
            <li>
              <Link to='/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
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
