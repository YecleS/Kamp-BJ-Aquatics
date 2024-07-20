import React from 'react';
import SectionComponent from '../UIComponents/SectionComponent';
import Button from '../UIComponents/Button'
import '../Styles/Testimonial.css';
import TestimonialCards from '../UIComponents/TestimonialCards';
import CustomerAnonymous from '../Assets/customer-blank.png';
import CustomerImg1 from '../Assets/customer1.png';
import CustomerImg2 from '../Assets/customer2.png';
import CustomerImg3 from '../Assets/customer3.png';
import CustomerImg4 from '../Assets/cutomer4.png';
import SocialIcons from '../UIComponents/SocialIcons';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  const testimonialData = [
    { id: 1,
      img: CustomerImg1, 
      feedback:'Kahit paulit ulit ang tanong ko dahil minsan di natutuloy ung pag order ko, at nalilimutan ko na mga prices, pero sumasagot parin sila. Kudos to you mga sir',
      name:'Janno Valida Mamucod', 
    },

    { id: 2,
      img: CustomerImg2,  
      feedback:'Very accomodating',
      name:'Kimberli Ann Fernandez Labe', 
    },

    { id: 3,
      img: CustomerImg3,  
      feedback:'100% the most accomodating seller for me sa Pacita/Chrysanthemum/Rosario. Very helpful sa buyers lalo if may questions and requests. A good shop for newbies and experienced keepers alike! Highly recommended to visit the store atleast once para makita nyo madami talagang options lalo if may new arrivals',
      name:'Rhodri Aurelio', 
    },

    { id: 4,
      img: CustomerImg4,  
      feedback:'Yow thank you so much po Sir Brix and Sir Jess ng Kamp BJ Aquatics napaka solid ulit ng pag pasyal ko jan, salute po sainyo.',
      name:"Mitra's Backyard", 
    },

    { id: 5,
      img: CustomerAnonymous,  
      feedback:'You are a good seller. Nag enquire din ako sa iba tagal mag respond, yong iba no response at all kahit malapit lang dito sa place ko. Kaya kahit malayo go lang keep it up.',
      name:"Anonymous Customer", 
    },

    { id: 6,
      img: CustomerAnonymous,  
      feedback:'First time buyer here sa shop nila. Super kind and accomodating si seller. Bilis nila mag process agad ng order at safe din nakakarating via Lalamove. Highly recommended',
      name:"Anonymous Customer", 
    },

    { id: 7,
      img: CustomerAnonymous,  
      feedback:'Salamat po sa pag guide sa newbie very appreciated po. Smooth transaction nadin po. More sales po sainyo, have a blessed holy week po',
      name:"Anonymous Customer", 
    },

    { id: 8,
      img: CustomerAnonymous,  
      feedback:'approachable and accomodating yung seller. Fast transaction din. Thank you',
      name:"Anonymous Customer", 
    },
  ]
  return (
    <SectionComponent
        sectionId='testimonial-section'
        sectionTitle='What Our Customer Says'
        sectionSubtitle='Be A Kamper Now !'
    >
        <div className='testimonial-section__content-wrapper'>
          <div className='testimonial-section__text-wrapper'>
            <div className='testimonial-section__text-header'>
              <h3 className='testimonial-section__title'>What they've said about us</h3>
              <p className='testimonial-section__sub-title'>Join our community now, be a kamper now!</p>
              <p className='testimonial-section__description'>Discover why our customers rave about their experiences with Kamp BJ Aquatics. From top-tier products to exceptional customer service, our dedication to aquatic excellence has earned us the loyalty and trust of countless aquatic enthusiasts. At Kamp BJ Aquatics, we’re not just a store—we’re a community.</p>
              <Link to='/contacts'>
                <Button label='Reach Out' varietyClass='testimonial-section__reach-out'/>
              </Link>
            </div>
            <div className='testimonial-section__socials-wrapper'>
              <h3 className='testimonial-section__social-icons-title'>Follow Us:</h3>
              <div className='testimonial-section__icons-wrapper'>
                <SocialIcons link='https://www.facebook.com/search/top?q=kamp%20bj%20aquatics' icon='fa-facebook-f'/>
                <SocialIcons link='https://www.tiktok.com/@kampbjaquatics?lang=en' icon='fa-tiktok'/>
                <SocialIcons link='https://www.instagram.com/kamp.bj.3/?hl=am-et' icon='fa-instagram'/>
              </div>
            </div>
          </div>
          <div className='testimonial-section__testimonial-img-wrapper'>
          {testimonialData.map((testimonials) =>(
              <TestimonialCards  key={testimonials.id} image={testimonials.img} feedback={testimonials.feedback} name={testimonials.name} />
            ))}
            
          </div>
        </div>
    </SectionComponent>
  )
}

export default Testimonial
