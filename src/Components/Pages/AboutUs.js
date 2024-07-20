import React from 'react';
import '../Styles/AboutUs.css';
import SectionComponent from '../UIComponents/SectionComponent';
import AboutUsImg from '../Assets/about-us-img.png';
import Button from '../UIComponents/Button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <SectionComponent 
        sectionId='about-us-section'
        sectionTitle="About Us"
        sectionSubtitle="Get To Know Us"
    >
      <div className='about-us__content-wrapper'>
        <div className='about-us__img-wrapper'>
          <img src={AboutUsImg} alt='about us image' className='about-us__img' />
        </div>
        <div className='about-us__details-wrapper'>
          <div className='about-us__text-box-wrapper'>
            <p className='about-us__title'>Greetings</p>
            <p className='about-us__description'>Welcome to Kamp BJ Aquatics, your ultimate destination for all things aquatic. Striving to be a one-stop shop for your aquatic pet needs, we are passionate about providing you with the finest selection of fish, plants, and equipment to create and maintain your underwater oasis.</p>
          </div>
          <div className='about-us__text-box-wrapper'>
            <p className='about-us__title'>Our Mission</p>
            <p className='about-us__description'>At Kamp BJ Aquatics, our mission is to support and inspire aquatic enthusiasts of all levels. Whether you're a seasoned aquarist or just starting your journey, we offer a wide range of high-quality products and expert advice to ensure the health and happiness of your aquatic pets.</p>
          </div>
          <div className='about-us__button-wrapper'>
            <Link to='/contacts'>
              <Button label='Reach Out' varietyClass='about-us__reach-out'/>
            </Link>
          </div>
        </div>
      </div>
    </SectionComponent>
  )
}

export default AboutUs
