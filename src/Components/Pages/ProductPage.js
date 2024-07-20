import React,{ useEffect, useRef, useState } from 'react';
import '../Styles/ProductPage.css';
import CardsComponent from '../UIComponents/CardsComponent';
import Product1 from '../Assets/product1.jpg';
import Product2 from '../Assets/product2.jpg';
import Product3 from '../Assets/product5.jpg';
import Product4 from '../Assets/product7.jpg';
import ScrollToTop from '../UIComponents/ScrollToTop';


const ProductPage = () => {
  //To scroll to top of the page upon navigation
  ScrollToTop();
  
  const [isFilterDropdownOpen, isSetFilterDropdownOpen] = useState();
  const filterWrapper = useRef(null);

    const itemData = [
        {id: 101, img: Product1, name: 'Tempered glass aquarium', price: 323 },
        {id: 202, img: Product2, name: 'Clear film glass protector', price: 126 },
        {id: 303, img: Product3, name: 'Fresh water filters', price: 200 },
        {id: 404, img: Product4, name: 'Organic substrate moss', price: 80 },
        {id: 505, img: Product1, name: 'Clear glass aquarium', price: 323 },
        {id: 606, img: Product2, name: 'substratesoil', price: 126 },
        {id: 707, img: Product3, name: 'filters', price: 200 },
        {id: 808, img: Product4, name: 'Organic substrate moss', price: 80 },
        {id: 909, img: Product2, name: 'substratesoil', price: 126 },
        {id: 10012, img: Product3, name: 'filters', price: 200 },
        {id: 10013, img: Product4, name: 'Organic substrate moss', price: 80 },
    ]

    const toggleFilterDropdown = () => {
      isSetFilterDropdownOpen(!isFilterDropdownOpen);
    }

    useEffect(() => {
      const handleClick = (e) => {
        if(filterWrapper.current && !filterWrapper.current.contains(e.target)){
          isSetFilterDropdownOpen(false);
        }
      }
      document.addEventListener('click', handleClick);

      return() => document.removeEventListener('click', handleClick);
    }, [])

  return (
    <div className='product-page'>
      <div className='product-page__content-wrapper'>
        <div className='product-page__header'>
        <div className='product-page__search-field-wrapper'>
            <input type='text' placeholder='Search a item...' className='product-page__input-search' />
          </div>
          <div className='product-page__filter-wrapper' ref={filterWrapper}>
            <div className='product-page__filter-icon-wrapper' onClick={toggleFilterDropdown} ref={filterWrapper}>
              <i className="product-page__filter-icon fa-solid fa-filter"></i>
            </div>
            {isFilterDropdownOpen && 
                <div className='product-page__filter-dropdown-wrapper'>
                  <p className='product-page__filter-dropdown-title'>Sort By:</p>
                  <select className='product-page__filter-field' defaultValue=''>
                    <option value='' disabled hidden>Price</option>
                    <option value='low-to-high'>Price: Low to High</option>
                    <option value='high-to-low'>Price: High to Low</option>
                  </select>
                </div>
              }
          </div>
        </div>
        <div className='product-page__body'>
            {itemData.map((items) =>(
                <CardsComponent key={items.id} id={items.id} image={items.img} name={items.name} price={items.price} />
            ))}
        </div>    
      </div>
    </div>
  )
}

export default ProductPage
