import React from 'react'
import ColorBox from './ColorBox';
import "./ColorBoxGrid.css"
const ColorBoxGrid = ({colors}) => {
    const boxes = [];
    for (let index = 0; index < 25; index++) {
        boxes.push(<ColorBox colors={colors} />)
    }
  return (
    <div className='colorboxgrid'>{boxes}</div>
  )
}

export default ColorBoxGrid
