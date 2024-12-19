import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Levels = () => {

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
    //hoook to get timer scores from local storage and update existing one if its a better
    useEffect(() => {
        const fetchScores = async () => {
            const currentUsername = localStorage.getItem('username');
            try {
                const response = await fetch('http://localhost:5000/leaderboards');
                if (response.ok) {
                    const data = await response.json();
                    const filteredScores = data.data.filter(score => score.username === currentUsername);
                    //updates level score depending on the level given from the fetched data
                    if (filteredScores.length > 0) {
                        filteredScores.forEach(score => {
                            switch (score.level) {
                                case 'one':
                                    setOneTime(parseInt(score.time));
                                    break;
                                case 'two':
                                    setTwoTime(parseInt(score.time));
                                    break;
                                case 'three':
                                    setThreeTime(parseInt(score.time));
                                    break;
                                case 'four':
                                    setFourTime(parseInt(score.time));
                                    break;
                                default:
                                    console.warn(`Unexpected level: ${score.level}`);
                            }
                        });
                    } else {
                        console.log("No scores found for this username");
                        setOneTime(0);
                        setTwoTime(0);
                        setThreeTime(0);
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
            <a className="back-button" href="/menu">Back</a>
            <header>
                <h1>Cipher League</h1>
                <h3>{oneTime}</h3>
                <h3>{twoTime}</h3>
                <h3>{threeTime}</h3>
                <h3>{fourTime}</h3>
            </header>
            {/* .map function displaying all levels */}
            <div className="level-container">
            {[1, 2, 3, 4].map((level, index) => (
                <div key={index} className={`level-${index + 1} ${selectedLevel === index ? "" : ""}`} onClick={() => handleLevelClick(index)}>
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
                    <button className={`level-button ${selectedLevel === index ? "selected" : ""}
                        ${index === 0 && oneTime > 0 ? "level-green" : ""}
                        ${index === 1 && twoTime > 0 ? "level-green" : ""}
                        ${index === 2 && threeTime > 0 ? "level-green" : ""}
                        ${index === 3 && fourTime > 0 ? "level-green" : ""}`}
                    >
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
