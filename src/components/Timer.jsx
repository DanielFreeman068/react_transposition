import React, { useState, useEffect } from "react";

const Timer = ({ addedTime, isRunning }) => {
const [time, setTime] = useState(0);

// timer logic stuff
useEffect(() => {
    let interval;
    if (isRunning) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10); 
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isRunning]);

// Format time into mm:ss:SS
const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((milliseconds % 60000) / 1000).toString().padStart(2, "0");
    const millisecondsPart = (milliseconds % 1000).toString().padStart(3, "0");
    return `${minutes}:${seconds}:${millisecondsPart}`;
};

return (
    <div>
        <h3 className="timer">Timer: {formatTime(time + addedTime)}</h3>
    </div>
);
};

export default Timer;
