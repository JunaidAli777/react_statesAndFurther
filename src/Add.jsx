import React from 'react'
import { useState } from 'react';

const Add = () => {                                
    const [counter, setCounter] = useState(0);                                                 
    // console.log(`counter was set to 10`);
    const addOne = () => {
        setCounter(counter + 1);                                                            
    }

    const addThree = () => {
        // setCounter(counter + 1); //counter == 1 (in the next render)
        // setCounter(counter + 1); //counter == 1 (in the next render)
        // setCounter(counter + 1); //counter == 1 (in the next render)

        setCounter((crr) => crr + 1) //counter == 1 (in the next render)
        console.log(counter);        // will give 0 because the state hasn't been updated yet, 
        //Rather, react is just holding on to the current value that will be updated in the state
        //IN THE NEXT RENDER
        setCounter((crr) => crr + 1) //counter == 2 (in the next render)
        setCounter((crr) => crr + 1) //counter == 3 (in the next render)
    }

    const setToTen = () => {
        setCounter(10);
    }
    
    return (
        <div>
            <p>The count is:{counter}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>set to 10</button>
        </div>
    )
}

export default Add