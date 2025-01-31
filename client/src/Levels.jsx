import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Levels = () => {
    const [levelsCompleted, setLevelsCompleted] = useState(0)
    const [oneTime, setOneTime] = useState([]);
    const [twoTime, setTwoTime] = useState(0);
    const [threeTime, setThreeTime] = useState(0);
    const [fourTime, setFourTime] = useState(0);

    const [play, setPlay] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const navigate = useNavigate();
    //function to handle the level click and change my useStates
    const handleLevelClick = (index) => {
        setSelectedLevel(index);
        setPlay(true);
    };
    //function using if statement do decide which component to pull
    const handleStart = (index) => {
        console.log(`level ${index + 1}`);
        if(index === 0){
            navigate('/LevelOne');
        }else if(index === 1){
            navigate('/LevelTwo');
        }else if(index === 2){
            navigate('/LevelThree');
        }else if(index === 3){
            navigate('/LevelFour');
        }
    };
    //hoook to get username from local storage and fetch score data
    useEffect(() => {
        const fetchScores = async () => {
            const currentUsername = localStorage.getItem('username');
            try {
                const response = await fetch('https://react-transposition-backend.onrender.com/FirstLevelData');
                if (response.ok) {
                    const levelOneData = await response.json();
                    const filteredScores = levelOneData.data.filter(score => score.username === currentUsername);
                    //updates level score depending on the level given from the fetched data
                    if (filteredScores.length > 0) {
                        setOneTime(parseInt(filteredScores[0].time));
                        setLevelsCompleted(1);
                    } else {
                        console.log("No scores found for this username");
                        setOneTime(0);
                    }
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                alert(err.message);
            }
            try {
                const response = await fetch('https://react-transposition-backend.onrender.com/SecondLevelData');
                if (response.ok) {
                    const levelTwoData = await response.json();
                    const filteredScores = levelTwoData.data.filter(score => score.username === currentUsername);
                    //updates level score depending on the level given from the fetched data
                    if (filteredScores.length > 0) {
                        setTwoTime(parseInt(filteredScores[0].time));
                        setLevelsCompleted(2);
                    } else {
                        console.log("No scores found for this username");
                        setTwoTime(0);
                    }
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                alert(err.message);
            }
            try {
                const response = await fetch('https://react-transposition-backend.onrender.com/ThirdLevelData');
                if (response.ok) {
                    const levelThreeData = await response.json();
                    const filteredScores = levelThreeData.data.filter(score => score.username === currentUsername);
                    //updates level score depending on the level given from the fetched data
                    if (filteredScores.length > 0) {
                        setThreeTime(parseInt(filteredScores[0].time));
                        setLevelsCompleted(3);
                    } else {
                        console.log("No scores found for this username");
                        setThreeTime(0);
                    }
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                alert(err.message);
            }
            try {
                const response = await fetch('https://react-transposition-backend.onrender.com/FourthLevelData');
                if (response.ok) {
                    const levelFourData = await response.json();
                    const filteredScores = levelFourData.data.filter(score => score.username === currentUsername);
                    //updates level score depending on the level given from the fetched data
                    if (filteredScores.length > 0) {
                        setFourTime(parseInt(filteredScores[0].time));
                        setLevelsCompleted(4);
                    } else {
                        console.log("No scores found for this username");
                        setFourTime(0);
                    }
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                alert(err.message);
            }
        };
        fetchScores();
    }, []);    
    return (
        <>
            <button className="back-button" onClick={()=>navigate('/menu')}>Back</button>
            <header>
                <h1>Cipher League</h1>
            </header>
            {/* .map function displaying all levels */}
            <div className="level-container">
            {[1, 2, 3, 4].map((level, index) => (
                <div key={index} className={`level-${index + 1} ${selectedLevel === index ? "" : ""}`}>
                    <div className="star-group">
                        <i className={`fas fa-star 
                            ${index === 0 && oneTime > 0 ? "gold" : ""} 
                            ${index === 1 && twoTime > 0 ? "gold" : ""} 
                            ${index === 2 && threeTime > 0 ? "gold" : ""} 
                            ${index === 3 && fourTime > 0 ? "gold" : ""}`}></i>
                        <i className={`fas fa-star 
                            ${index === 0 && oneTime > 0 && oneTime < 120000 ? "gold" : ""}
                            ${index === 1 && twoTime > 0 && twoTime < 120000 ? "gold" : ""}
                            ${index === 2 && threeTime > 0 && threeTime < 120000 ? "gold" : ""}
                            ${index === 3 && fourTime > 0 && fourTime < 120000 ? "gold" : ""}`}></i>
                        <i className={`fas fa-star 
                            ${index === 0 && oneTime > 0 && oneTime < 60000 ? "gold" : ""}
                            ${index === 1 && twoTime > 0 && twoTime < 60000 ? "gold" : ""}
                            ${index === 2 && threeTime > 0 && threeTime < 60000 ? "gold" : ""}
                            ${index === 3 && fourTime > 0 && fourTime < 60000 ? "gold" : ""}`}></i>
                    </div>
                    <button 
                        className={`
                            level-button 
                            ${selectedLevel === index ? "selected" : ""}
                            ${index === 0 && oneTime > 0 ? "level-green" : ""}
                            ${index === 1 && twoTime > 0 ? "level-green" : ""}
                            ${index === 2 && threeTime > 0 ? "level-green" : ""}
                            ${index === 3 && fourTime > 0 ? "level-green" : ""}`}
                            disabled={index > levelsCompleted}
                            onClick={() => handleLevelClick(index)}>
                        {level}
                    </button>
                </div>
            ))}
                <button className={`level-start ${play ? "active" : ""}`} disabled={!play} onClick={()=>handleStart(selectedLevel)}>
                    Play!
                </button>
            </div>
        </>
    );
};

export default Levels;
