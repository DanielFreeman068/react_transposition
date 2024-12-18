import React, { useState, useEffect } from "react";

const Timer = ({ addedTime, isRunning, level, onLevelComplete }) => {
const [time, setTime] = useState(0);

// Timer logic
useEffect(() => {
    let interval;
    if (isRunning) {
    interval = setInterval(() => {
        setTime((prevTime) => {
        let newTime = prevTime + 10;
        if (level === 'one') {
            localStorage.setItem("oneTime", newTime);
        } else if (level === 'two') {
            localStorage.setItem("twoTime", newTime);
        } else if (level === 'three') {
            localStorage.setItem("threeTime", newTime);
        } else if (level === 'four') {
            localStorage.setItem("fourTime", newTime);
        }
        return newTime;
        });
    }, 10);
    } else {
    clearInterval(interval);
    if (onLevelComplete) {
        // Call the function to post data once the level is complete
        onLevelComplete(level, time);
    }
    }
    return () => clearInterval(interval);
}, [isRunning, level, time, onLevelComplete]);

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
