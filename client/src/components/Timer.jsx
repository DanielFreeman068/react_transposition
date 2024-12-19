import React, { useState, useEffect } from "react";

const Timer = ({ addedTime, isRunning, level, onLevelComplete }) => {
const [time, setTime] = useState(0);


useEffect(() => {
    if (level) {
    if (level === "one") localStorage.setItem("oneTime", 0);
    if (level === "two") localStorage.setItem("twoTime", 0);
    if (level === "three") localStorage.setItem("threeTime", 0);
    if (level === "four") localStorage.setItem("fourTime", 0);
    }
    setTime(0);
}, [level]);

// Timer logic
useEffect(() => {
    let interval;
    if (isRunning) {
    interval = setInterval(() => {
        setTime((prevTime) => {
        const newTime = prevTime + 10;

        // Save the exact time into localStorage
        if (level === "one") {
            localStorage.setItem("oneTime", newTime + addedTime);
        } else if (level === "two") {
            localStorage.setItem("twoTime", newTime + addedTime);
        } else if (level === "three") {
            localStorage.setItem("threeTime", newTime + addedTime);
        } else if (level === "four") {
            localStorage.setItem("fourTime", newTime + addedTime);
        }

        return newTime;
        });
    }, 10);
    } else {
    clearInterval(interval);
    if (onLevelComplete) {
        onLevelComplete(level, time + addedTime);
    }
    }
    return () => clearInterval(interval);
}, [isRunning, level, addedTime, onLevelComplete, time]);

// Format time into mm:ss:SS
const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000)
    .toString()
    .padStart(2, "0");
    const seconds = Math.floor((milliseconds % 60000) / 1000)
    .toString()
    .padStart(2, "0");
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
