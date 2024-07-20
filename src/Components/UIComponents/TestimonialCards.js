import React from 'react';
import Customer1 from '../Assets/customer1.png';
import '../Styles/TestimonialCards.css';

const TestimonialCards = ({image, feedback, name}) => {
  return (
    <div className='testimonial-cards'>
      <div className='testimonial-cards__image-wrapper'>
        <img src={image} className='testimonial-cards__img' />
      </div>
      <div className='testimonial-cards__feedback-wrapper'>
        <p className='testimonial-cards__feedback'>{feedback}</p>
        <p className='testimonial-cards__customer-name'>{name}</p>
        <p className='testimonial-cards__customer-description'>Certified Kamper !</p>
      </div>
    </div>
  )
}

export default TestimonialCards
