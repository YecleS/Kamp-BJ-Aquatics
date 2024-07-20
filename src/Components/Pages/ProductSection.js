import React from 'react';
import '../Styles/ProductSection.css';
import Button from '../UIComponents/Button';
import SectionComponent from '../UIComponents/SectionComponent';
import CardsComponent from '../UIComponents/CardsComponent';
import Product1 from '../Assets/product1.jpg';
import Product2 from '../Assets/product2.jpg';
import Product3 from '../Assets/product5.jpg';
import Product4 from '../Assets/product7.jpg';
import { Link } from 'react-router-dom';


const ProductSection = () => {
    const itemData = [
        {id: 101, img: Product1, name: 'Tempered glass aquarium', price: 323, type:'product'},
        {id: 202, img: Product2, name: 'Clear film glass protector', price: 126, type:'product' },
        {id: 303, img: Product3, name: 'Fresh water filters', price: 200, type:'product' },
        {id: 404, img: Product4, name: 'Organic substrate moss', price: 80, type:'product' },
    ]

  return (
    <SectionComponent
        sectionId='product-section'
        sectionTitle='Featured Products'
        sectionSubtitle='View Some Of Our Products'
    >
        <div className='product-section__content-wrapper'>
            {itemData.map((item) =>(
                <CardsComponent key={item.id} id={item.id} image={item.img} name={item.name} price={item.price} type={item.type}/>
            ))}
            <div className='product-section__button-wrapper'>
                <Link to='/products'>
                    <Button label='View More'/>
                </Link>
            </div>
        </div>
    </SectionComponent>
  )
}

export default ProductSection
