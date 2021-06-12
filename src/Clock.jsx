import React, { useEffect, useState, useRef } from 'react'

const Clock = ({running, setIsCompleted, reset, setReset}) => {
    const [clockTime, setClockTime] = useState(5);
    let timer = useRef(null);

    const startClock = () => {
        setReset(false);
        if(timer.current) { return }
        timer.current = setInterval(() => setClockTime(clockTime => clockTime -1), 1000);
    }

    const stopClock = () => {
        clearInterval(timer.current);
        timer.current = null;
    }

    useEffect(() => {
        if(reset === true) {
            setClockTime(5);
            clearInterval(timer.current);
            timer.current = null;
        }
    }, [reset]);

    useEffect(() => {
        if(!clockTime > 0) {
            stopClock();
            setIsCompleted(true);
        }
    },[clockTime])

    useEffect(() => {
        if(running === true) {
            startClock();
        } else {
            stopClock();
        }
    }, [running])

    return(
        <div>{`${clockTime} s`}</div>
    );
}

export default Clock;