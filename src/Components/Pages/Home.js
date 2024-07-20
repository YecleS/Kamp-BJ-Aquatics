import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Offers from './Offers';
import ProductSection from './ProductSection';
import PetsSection from './PetsSection';
import Testimonial from './Testimonial';
import ScrollToTop from '../UIComponents/ScrollToTop';

const Home = () => {
  //To scroll to top of the page upon navigation
  ScrollToTop();
  
  return (
    <div className='home'>
      <main>
        <Hero />
        <AboutUs />
        <Offers />
        <ProductSection />
        <PetsSection />
        <Testimonial />
      </main>
    </div>
  )
}

export default Home
