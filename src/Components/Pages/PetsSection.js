import React from 'react';
import '../Styles/PetsSection.css';
import Button from '../UIComponents/Button';
import SectionComponent from '../UIComponents/SectionComponent';
import CardsComponent from '../UIComponents/CardsComponent';
import Pet1 from '../Assets/pet1.jpg';
import Pet2 from '../Assets/pet2.jpg';
import Pet3 from '../Assets/pet3.jpg';
import Pet4 from '../Assets/pet4.jpg';
import { Link } from 'react-router-dom';

const PetsSection = () => {
    const itemData = [
        {id: 1001, img: Pet1, name: 'Clown fish', price: 303, type:'pet'},
        {id: 2002, img: Pet2, name: 'Rainbow fish', price: 126, type:'pet'},
        {id: 3003, img: Pet3, name: 'Messo fish', price: 200, type:'pet'},
        {id: 4004, img: Pet4, name: 'Egyptian fish', price: 80, type:'pet'},
    ]
    
  return (
    <SectionComponent
        sectionId='pets-section'
        sectionTitle='Featured Pets'
        sectionSubtitle='View Some Of Our Pets'
    >
        <div className='pets-section__content-wrapper'>
            {itemData.map((items) =>(
                <CardsComponent key={items.id} id={items.id} image={items.img} name={items.name} price={items.price} type={items.type}/>
            ))}
            <div className='pets-section__button-wrapper'>
                <Link to='/pets'>
                    <Button label='View More'/>
                </Link>
            </div>
        </div>
    </SectionComponent>
  )
}

export default PetsSection
