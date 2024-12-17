import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Levels = () => {
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

    return (
        <>
            <a className="back-button" href="/menu">Back</a>
            <header>
                <h1>Cipher League</h1>
            </header>
            {/* .map function displaying all levels */}
            <div className="level-container">
                {[1, 2, 3, 4].map((level, index) => (
                    <div key={index} className='level' onClick={() => handleLevelClick(index)}>
                        <div className="star-group">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <button className={`level-button ${selectedLevel === index ? "selected" : ""}`}>{level}</button>
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
