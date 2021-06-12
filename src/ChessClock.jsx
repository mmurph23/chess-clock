import React, { useState } from 'react';
import Clock from './Clock';

const ChessClock = () => {
    // if whose turn 0, it's blacks turn, else 1, it's whites turn
    const [whoseTurn, setWhoseTurn] = useState();
    const [isCompleted, setIsCompleted] = useState(false);
    console.log('isCompleted: ', isCompleted);
    return(
        <>
        <Clock
            running={whoseTurn === 0}
            setIsCompleted={setIsCompleted}/>
        <Clock
            running={whoseTurn === 1}
            setIsCompleted={setIsCompleted}/>
        <button
            disabled={isCompleted}
            onClick={() => setWhoseTurn(1)}>
            White Turn
        </button>
        <button
            disabled={isCompleted}
            onClick={() => setWhoseTurn(0)}>
            Black Turn
        </button>
        {isCompleted && <div>Game over! {whoseTurn === 0? "Black" : "White" } player ran out of time.</div>}
        </>
        
    );
}

export default ChessClock;