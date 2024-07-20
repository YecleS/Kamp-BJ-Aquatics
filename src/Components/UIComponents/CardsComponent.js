import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CardsComponent.css';

const CardsComponent = ({id, image, name, price, type}) => {
  //Transform the name into URL
  const encodedItemName = encodeURIComponent(name);

  return (
    <Link to={`/view-item/${type}/${id}/${encodedItemName}`} className='cards__link'>
      <div className='cards'>
        <div className='cards__header'>
          <img src={image} alt='image' className='cards__img'/>
        </div>
        <div className='cards__body'>
          <p className='cards__title'>{name}</p>
          <p className='cards__price'>₱{price}</p>
        </div>
      </div>
    </Link>
      
  )
}

export default CardsComponent
