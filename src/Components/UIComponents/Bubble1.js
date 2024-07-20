import React from 'react';
import Bubble1Img from '../Assets/bubble1.png';
import '../Styles/Bubbles.css';

const Bubble1 = ({varietyClass}) => {
  return (
    <img src={Bubble1Img} className={`bubble1__img ${varietyClass}`}></img>
  )
}

export default Bubble1
