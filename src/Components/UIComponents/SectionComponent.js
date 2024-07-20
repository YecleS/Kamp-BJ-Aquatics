import React from 'react';
import '../Styles/SectionComponent.css';
import bubbleIcon from '../Assets/bubbleIcon.png';

const SectionComponent = ({ sectionId, sectionTitle, sectionSubtitle, children }) => {
  return (
    <section className='section' id={sectionId}>
        <div className='section__content-wrapper'>
            <div className='section__header'>
                <h3 className='section__title'>
                  <img src={bubbleIcon} alt='bubble icon' className='section__title-icon--left'></img>
                  {sectionTitle}
                  <img src={bubbleIcon} alt='bubble icon' className='section__title-icon--right'></img>
                </h3>
                <p className='section__sub-title'>{sectionSubtitle}</p>
            </div>
            <div className='section__body'>
                {children}
            </div>
        </div>
    </section>
  )
}

export default SectionComponent
