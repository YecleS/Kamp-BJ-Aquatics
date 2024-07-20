import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavigationLink.css';

const NavigationLink = ({linkPath, label, onClick, varietyClass}) => {
  return (
    <>
        <NavLink to={linkPath} className='navlink'>
            <p className={`navlink__label ${varietyClass}`} onClick={onClick}>{label}</p>
        </NavLink>
    </>
  )
}

export default NavigationLink
