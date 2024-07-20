import React from 'react'
import Bubble2Img from '../Assets/bubble2.png';
import '../Styles/Bubbles.css';

const Bubble2 = ({varietyClass}) => {
  return (
    <img src={Bubble2Img} className={`bubble2__img ${varietyClass}`}></img>
  )
}

export default Bubble2
