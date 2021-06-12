import React, { useEffect, useState, useRef } from 'react'

const Clock = ({running, setIsCompleted}) => {
    const [clockTime, setClockTime] = useState(5);
    const timer = useRef(null);

    const startClock = () => {
        if(timer.current) { return }
        timer.current = setInterval(() => setClockTime(clockTime => clockTime -1), 1000);
    }

    const stopClock = () => {
        clearInterval(timer.current);
        timer.current = null;
    }

    useEffect(() => {
        if(!clockTime > 0) {
            console.log('clockTime not greater than zero: ', clockTime);
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
        <div>{`${clockTime}`}</div>
    );
}

export default Clock;