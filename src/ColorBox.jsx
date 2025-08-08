import React from 'react'
import "./ColorBox.css";
import { useState } from 'react';

const ColorBox = ({colors}) => {
    const [randomColor, setRandomColor] = useState(genRandomColor(colors))
    
    const genRandomColor = (colors) => {
        const idx = Math.floor(Math.random() * colors.length);
        return colors[idx];
    }  

    const changeColor = () => {
        setRandomColor(genRandomColor(colors))
    }
  return (
    <div 
        className='colorbox' 
        style={{backgroundColor: randomColor}} 
        onClick={changeColor}>
    </div>
  )
}

export default ColorBox
