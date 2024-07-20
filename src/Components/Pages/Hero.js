import React from 'react';
import '../Styles/Hero.css';
import HeroImg from '../Assets/hero-img.png';
import Button from '../UIComponents/Button';
import Bubble1Img from '../UIComponents/Bubble1';
import Bubble2Img from '../UIComponents/Bubble2';
import Bubble3Img from '../UIComponents/Bubble3';
import SocialIcons from '../UIComponents/SocialIcons';

const Hero = () => {
  const slideToSection = () => {
    let section = document.getElementById('product-section');
    section.scrollIntoView({behavior:'smooth'});
  }

  return (
    <section className='hero'>
      <div className='hero__content-wrapper'>
        <div className='hero__text-wrapper'>
          <div className='hero__title-wrapper'>
            <h1 className='hero__title'>Discover Your Aquatic Paradise</h1>
          </div>
          <div className='hero__sub-title-wrapper'>
            <p className='hero__sub-title'>Explore Our Exquisite Collection of Fish, Plants, Equipments and Pet Supplies</p>
          </div>
          <div className='hero__hero-button-wrapper'>
            <Button label="Browse" varietyClass="hero__call-to-action-button" onClick={slideToSection}/>
          </div>
          <div className='hero__social-icons-wrapper'>
            <SocialIcons link='https://www.facebook.com/search/top?q=kamp%20bj%20aquatics' icon='fa-facebook-f'/>
            <SocialIcons link='https://www.tiktok.com/@kampbjaquatics?lang=en' icon='fa-tiktok'/>
            <SocialIcons link='https://www.instagram.com/kamp.bj.3/?hl=am-et' icon='fa-instagram'/>
          </div>
          <Bubble3Img varietyClass='hero__text-bubble1-img'/>
          <Bubble3Img varietyClass='hero__text-bubble2-img'/>
          <Bubble3Img varietyClass='hero__text-bubble3-img'/>
          <Bubble3Img varietyClass='hero__text-bubble4-img'/>
          <Bubble3Img varietyClass='hero__text-bubble5-img'/>
        </div>
        <div className='hero__img-wrapper'>
            <img src={HeroImg} alt='hero image' className='hero__img'/>
            <Bubble1Img varietyClass='hero__bubble1-img'/>
            <Bubble1Img varietyClass='hero__bubble2-img'/>
            <Bubble1Img varietyClass='hero__bubble3-img'/>
            <Bubble2Img varietyClass='hero__bubble4-img'/>
            <Bubble2Img varietyClass='hero__bubble5-img'/>
            <Bubble2Img varietyClass='hero__bubble6-img'/>          
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1721273248">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  )
}

export default Hero
