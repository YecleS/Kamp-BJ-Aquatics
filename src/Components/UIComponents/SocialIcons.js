import React from 'react';
import '../Styles/SocialIcons.css';

const SocialIcons = ({link, icon , varietyClass}) => {
  return (
    <a href={link} target='blank' className={`social-icons__icon-wrapper ${varietyClass}`}>
        <i className={`social-icons__icon fa-brands ${icon}`}></i>
    </a>
  )
}

export default SocialIcons
