import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [winner, setWinner] = useState("");

    useEffect(() => {
        if(counter1 === 3) {
            setWinner("Counter1")
        }

        if (counter2 === 3) {
            setWinner("Counter2")
        }
        
        if (counter3 === 3) {
            setWinner("Counter3")
        }

        const interval = setInterval(() => {
            console.log("time is ticking..")
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [counter1, counter2, counter3] )

    const incCounter1 = () => {
        setCounter1((counter1) => counter1 + 1)
    }

    const incCounter2 = () => {
        setCounter2((counter2) => counter2 + 1)
    }

    const incCounter3 = () => {
        setCounter3((counter3) => counter3 + 1)
    }

    const reset = () => {
        setCounter1(0);
        setCounter2(0);
        setCounter3(0);
        setWinner("");
    }
    return (
        <div>
            { winner && <h3 style={{color: "green"}}>{winner} is the winner</h3> }
            <div style={{display: 'flex', justifyContent: "center", gap: "24px"}}>
                <div>
                    <p>Counter1: {counter1}</p>
                    <button onClick={incCounter1} disabled={winner}>+1</button>
                </div>

                <div>
                    <p>Counter2: {counter2}</p>
                    <button onClick={incCounter2} disabled={winner}>+1</button>
                </div>

                <div>
                    <p>Counter3: {counter3}</p>
                    <button onClick={incCounter3} disabled={winner}>+1</button>
                </div>
            </div>
            <button style={{marginTop: "24px"}} onClick={reset}>Reset</button>
        </div>
    )
}

export default UseEffect
