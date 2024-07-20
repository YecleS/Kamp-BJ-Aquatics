import React from 'react';
import Bubble3Img from '../Assets/bubble3.png';
import '../Styles/Bubbles.css';

const Bubble3 = ({varietyClass}) => {
  return (
    <img src={Bubble3Img} className={`bubble3__img ${varietyClass}`}></img>
  )
}

export default Bubble3
