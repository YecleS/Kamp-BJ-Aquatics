import React from 'react';
import '../Styles/ContactDetails.css';

const ContactDetails = ({icon, title, details}) => {
  return (
    <div className='contact-details'>
        <div className='contact-details__icon-wrapper'>
            <i className={`contact-details__icon fa-solid ${icon}`}></i>
        </div>
        <div className='contact-details__information-wrapper'>
            <p className='contact-details__title'>{title}</p>
            <p className='contact-details__description'>
               {details}
            </p>
        </div>
    </div>
  )
}

export default ContactDetails

