import React from 'react'
import { useState } from 'react';

const Counter = () => {                                //firstRender     //secondRender
    const [num, setNum] = useState(0);                 // num=0          // num=1
    console.log(num);                                  //  0                  1  
    
    const incNum = () => {
        setNum(num + 1);                               // num=1(not yet!)
        console.log(num);                              //  0
    }
    
    return (
        <div>
            <p>The count is:{num}</p>
            <button onClick={(incNum)}>+1</button>
        </div>
    )
}

export default Counter
