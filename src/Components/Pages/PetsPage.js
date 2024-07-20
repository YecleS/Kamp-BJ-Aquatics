import React, { useRef, useEffect, useState } from 'react';
import '../Styles/PetsPage.css'
import Pet1 from '../Assets/pet1.jpg';
import Pet2 from '../Assets/pet2.jpg';
import Pet3 from '../Assets/pet3.jpg';
import Pet4 from '../Assets/pet4.jpg';
import CardsComponent from '../UIComponents/CardsComponent';
import ScrollToTop from '../UIComponents/ScrollToTop';

const PetsPage = () => {
  //To scroll to top of the page upon navigation
  ScrollToTop();
  const [isFilterDropdownOpen, isSetFilterDropdownOpen] = useState();
  const filterWrapper = useRef(null) ;
  
    const itemData = [
        {id: 1001, img: Pet1, name: 'Clown fish', price: 303, type:'pet'},
        {id: 2002, img: Pet2, name: 'Rainbow fish', price: 126, type:'pet'},
        {id: 3003, img: Pet3, name: 'Messo fish', price: 200, type:'pet'},
        {id: 4004, img: Pet4, name: 'Egyptian fish', price: 80, type:'pet'},
        {id: 5005, img: Pet1, name: 'Clown fish', price: 303, type:'pet'},
        {id: 6006, img: Pet2, name: 'Rainbow fish', price: 126, type:'pet'},
        {id: 7007, img: Pet3, name: 'Messo fish', price: 200, type:'pet'},
        {id: 8008, img: Pet4, name: 'Egyptian fish', price: 80, type:'pet'},
        {id: 9009, img: Pet1, name: 'Clown fish', price: 303, type:'pet'},
        {id: 311, img: Pet2, name: 'Rainbow fish', price: 126, type:'pet'},
        {id: 3022, img: Pet3, name: 'Messo fish', price: 200, type:'pet'},
        {id: 3033, img: Pet4, name: 'Egyptian fish', price: 80, type:'pet'},
    ]
  
  const toggleFilterDropdown = () => {
    isSetFilterDropdownOpen(!isFilterDropdownOpen)
  }

  useEffect(() => {
    const handleClick = (e) => {
      if(filterWrapper.current && !filterWrapper.current.contains(e.target)){
        isSetFilterDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [])

  return (
    <div className='pets-page'>
      <div className='pets-page__content-wrapper'>
        <div className='pets-page__header'>
          <div className='pets-page__search-field-wrapper'>
            <input type='text' placeholder='Search a item...' className='pets-page__input-search' />
          </div>
          <div className='pets-page__filter-wrapper' ref={filterWrapper}>
            <div className='pets-page__filter-icon-wrapper' onClick={toggleFilterDropdown} ref={filterWrapper}>
              <i className="pets-page__filter-icon fa-solid fa-filter"></i>
            </div>
            {isFilterDropdownOpen && 
                <div className='pets-page__filter-dropdown-wrapper'>
                  <p className='pets-page__filter-dropdown-title'>Sort By:</p>
                  <select className='pets-page__filter-field' defaultValue=''>
                    <option value='' disabled hidden>Price</option>
                    <option value='low-to-high'>Price: Low to High</option>
                    <option value='high-to-low'>Price: High to Low</option>
                  </select>
                </div>
              }
          </div>
        </div>
        <div className='pets-page__body'>
            {itemData.map((items) =>(
                <CardsComponent key={items.id} id={items.id} image={items.img} name={items.name} price={items.price} type={items.type}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PetsPage
