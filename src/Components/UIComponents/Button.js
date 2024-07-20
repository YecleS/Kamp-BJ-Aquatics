import React from 'react';
import '../Styles/Button.css';

const Button = ({label, varietyClass, onClick}) => {
  return (
    <>
        <button className={`button ${varietyClass}`} onClick={onClick}>{label}</button>
    </>
  )
}

export default Button
