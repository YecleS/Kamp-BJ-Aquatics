import React from 'react';
import '../Styles/Footer.css';
import SocialIcons from './SocialIcons';
import Logo from '../Assets/logo.png';
import NavigationLink from './NavigationLink';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content-wrapper'>
        <div className='footer__content-first-section'>
          <div className='footer__logo-wrapper'>
            <img src={Logo} className='footer__logo-img' />
            <p className='footer__logo-text'>Kamp BJ<br/>Aquatics</p>
          </div>
          <div className='footer__social-icons-wrapper'>
            <SocialIcons
              link='https://www.facebook.com/search/top?q=kamp%20bj%20aquatics' 
              icon='footer__social-icon fa-facebook-f'
              varietyClass='footer__social-icon-link'
            />
            <SocialIcons
              link='https://www.tiktok.com/@kampbjaquatics?lang=en' 
              icon='footer__social-icon fa-tiktok'
              varietyClass='footer__social-icon-link'
            />
            <SocialIcons
              link='https://www.instagram.com/kamp.bj.3/' 
              icon='footer__social-icon fa-instagram'
              varietyClass='footer__social-icon-link'
            />
          </div>
        </div>
        <div className='footer__content-second-section'>
          <p className='footer__contact-title'>Contact Us</p>
          <div className='footer__contact-details-wrapper'>
            <p className='footer__contact-details'>0965 760 9399</p>
            <p className='footer__contact-details'>yeclasteven85@gmail.com</p>
            <p className='footer__contact-details'>Block 33 Lot 12 Our Lady Of La Naval Street, Rosario Complex 4023 San Pedro, Philippines</p>
          </div>
        </div>
        <div className='footer__content-third-section'>
          <p className='footer__quick-links-title'>Quick Links</p>
          <div className='footer__quick-links-wrapper'>
            <a href='https://pinnacle.pnc.edu.ph/student' target='blank' className='footer__quick-links'>KampBjAquatics.com</a>
              <NavigationLink linkPath='/' label='Home' varietyClass='footer__quick-links'/>
              <NavigationLink linkPath='/products' label='Products' varietyClass='footer__quick-links'/>
              <NavigationLink linkPath='/pets' label='Pets' varietyClass='footer__quick-links'/>
              <NavigationLink linkPath='/contacts' label='Contacts' varietyClass='footer__quick-links'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
