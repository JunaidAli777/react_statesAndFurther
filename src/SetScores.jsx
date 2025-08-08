import React from 'react'
import { useState } from 'react'
const SetScores = () => {
    const [scores, setScores] = useState({ p1: 0, p2: 0 });

    // const incP1 = () => {
    //     scores.p1 += 1;
    //     setScores(scores)
    // }

    // const incP2 = () => {
    //     scores.p2 += 1;
    //     setScores(scores)
    // }
    // the above logic won't work because react would not detect any change in the state since
    // scores would stil be pointing to the same object even after change in it


    // const incP1 = () => {
    //     const newscores = { ...scores };
    //     newscores.p1 += 1;
    //     setScores(newscores)
    // }

    // const incP2 = () => {
    //     const newscores = { ...scores };
    //     newscores.p2 += 1;
    //     setScores(newscores)
    // }
    // The above logic is fine and would work

    const incP1 = () => {
        setScores((crrscores) => {
            return { ...crrscores, p1: crrscores.p1 + 1 }
        })
    }

    const incP2 = () => {
        setScores((crrscores) => {
            return { ...crrscores, p2: crrscores.p2 + 1 }
        })
    }

    return (
        <div>
            <p>P1 score: {scores.p1}</p>
            <button onClick={incP1}>incP1</button>
            <p>P2 score: {scores.p2}</p>
            <button onClick={incP2}>incP2</button>
        </div>
    )
}

export default SetScores
