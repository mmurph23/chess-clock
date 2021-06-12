import React, { useState } from 'react';
import Clock from './Clock';

const ChessClock = () => {
    // if whose turn 0, it's blacks turn, else 1, it's whites turn
    const [whoseTurn, setWhoseTurn] = useState();
    const [isCompleted, setIsCompleted] = useState(false);
    const [reset, setReset] = useState(false);

    return(
        <>
            <Clock
                running={whoseTurn === 0}
                reset={reset}
                setReset={setReset}
                setIsCompleted={setIsCompleted}
                user={'Black'}/>
            <Clock
                running={whoseTurn === 1}
                reset={reset}
                setReset={setReset}
                setIsCompleted={setIsCompleted}
                user={'White'}/>
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
            <button
                disabled={!isCompleted}
                onClick={() => {
                    setWhoseTurn()
                    setReset(true)
                    setIsCompleted(false)}}>
                Reset Clock
            </button>
            {isCompleted && <div>Game over! {whoseTurn === 0? "Black" : "White" } player ran out of time.</div>}
        </>
        
    );
}

export default ChessClock;