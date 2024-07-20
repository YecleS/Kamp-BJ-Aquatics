import React from 'react';
import '../Styles/ItemView.css';
import { useParams } from 'react-router-dom';
import Product1 from '../Assets/product1.jpg';
import Product2 from '../Assets/product2.jpg';
import Product3 from '../Assets/product5.jpg';
import Product4 from '../Assets/product7.jpg';
import Pet1 from '../Assets/pet1.jpg';
import Pet2 from '../Assets/pet2.jpg';
import Pet3 from '../Assets/pet3.jpg';
import Pet4 from '../Assets/pet4.jpg';
import Button from '../UIComponents/Button';
import { Link } from 'react-router-dom';
import ScrollToTop from '../UIComponents/ScrollToTop';

const ItemView = () => {
  //To scroll to top of the page upon navigation
  ScrollToTop();
  
  //UseParams are used to extract the URL and de-structure it. Storing the :clickedItemId(URL)
  // and :clickedItemName(URL).
  const { clickedItemId, clickedItemName, clickedItemType } = useParams();

  //Data for items, basically this page should also have an access to the database
  const itemData = [
    {id: 101, img: Product1, name: 'Tempered glass aquarium', price: 323, type:'product'},
    {id: 202, img: Product2, name: 'Clear film glass protector', price: 126, type:'product' },
    {id: 303, img: Product3, name: 'Fresh water filters', price: 200, type:'product' },
    {id: 404, img: Product4, name: 'Organic substrate moss', price: 80, type:'product' },
    {id: 505, img: Product1, name: 'Clear glass aquarium', price: 323, type:'product' },
    {id: 606, img: Product2, name: 'substratesoil', price: 126, type:'product' },
    {id: 707, img: Product3, name: 'filters', price: 200, type:'product' },
    {id: 808, img: Product4, name: 'Organic substrate moss', price: 80, type:'product' },
    {id: 909, img: Product2, name: 'substratesoil', price: 126, type:'product' },
    {id: 10012, img: Product3, name: 'filters', price: 200, type:'product' },
    {id: 10013, img: Product4, name: 'Organic substrate moss', price: 80, type:'product' },
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

  //Use the :clickedItemId to find the item id in the database. Once find, it will be used to display the contents
  const clickedItem = itemData.find(item => item.id === Number(clickedItemId));

  //If the :clickedItemId from the URL is not present in the database
  if(!clickedItem){
    return <p>Item Selected is Unavailable</p>
  }

  return (
    <div className='item-view'>
        <div className='item-view__content-wrapper'>
          <div className='item-view__img-wrapper'>
            <img src={clickedItem.img} className='item-view__img' />
          </div>
          <div className='item-view__details-wrapper'>
            <p className='item-view__name'>{clickedItem.name}</p>
            <p className='item-view__details'>₱{clickedItem.price}</p>

            {/* This one will capture the type of item and */}
            <Link to={clickedItem.type === 'product'? '/products':'/pets'}>
              <Button label='View More' varietyClass='item-view__view-more'/>
            </Link>
          </div>
            
        </div>
    </div>
  )
}

export default ItemView
