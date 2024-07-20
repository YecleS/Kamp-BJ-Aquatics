import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Header.css';
import Logo from '../Assets/logo.png';
import NavigationLink from './NavigationLink';

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const navBarRef = useRef(null);

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  }

  const closeHeader = () => {
    setIsHeaderOpen(false);
  }

  useEffect(() =>{
    const handleClick = (e) => {
      if(navBarRef.current && !navBarRef.current.contains(e.target)) {
        setIsHeaderOpen(false);
      }
    };
    
    document.addEventListener('click', handleClick);

    return() => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');

      if(window.scrollY > 0){
        header.classList.add('scrolled');
      }else {
        header.classList.remove('scrolled');
      }
    }

    document.addEventListener('scroll', handleScroll);
    
    return () => document.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className='header'>
        <div className='header__content-wrapper'>
            <div className='header__logo-wrapper'>
                <img src={Logo} alt='logo' className='header__logo-img'></img>
                <p className='header__logo-text'>Kamp BJ <br/> Aquatics</p>
            </div>
            <div className='header__navigation-wrapper' ref={navBarRef}>
              <i className="header__hamburger-menu fa-solid fa-bars" onClick={toggleHeader}></i>
              <nav className={`header__nav-links-wrapper ${isHeaderOpen? 'header__nav-active':''}`} >
              <i className="header__close-menu fa-solid fa-xmark" onClick={toggleHeader}></i>
              <NavigationLink 
                linkPath='/'
                label="Home"
                onClick={closeHeader}
              />
              <NavigationLink
                linkPath='/products'
                label="Products"
                onClick={closeHeader}
              />
              <NavigationLink 
                linkPath='/pets'
                label="Pets"
                onClick={closeHeader}
              />
              <NavigationLink
                linkPath='/contacts' 
                label="Contacts"
                onClick={closeHeader}
              />
              </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
