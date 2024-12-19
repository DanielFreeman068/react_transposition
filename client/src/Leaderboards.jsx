import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboards = () => {
    const navigate = useNavigate();
    const [levelOneScores, setLevelOneScores] = useState([]);
    const [levelTwoScores, setLevelTwoScores] = useState([]);
    const [levelThreeScores, setLevelThreeScores] = useState([]);
    const [levelFourScores, setLevelFourScores] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null)

    //function to handle the level click and change my useStates
    const handleLevelClick = (index) => {
        setSelectedLevel(index);
    };
    //decides which data to display
    const getSelectedScores = () => {
        switch (selectedLevel) {
            case 0:
                return levelOneScores;
            case 1:
                return levelTwoScores;
            case 2:
                return levelThreeScores;
            case 3:
                return levelFourScores;
            default:
                return [];
        }
    };
    //gets all data
    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch('http://localhost:5000/FirstLevelData');
                if (response.ok) {
                    const data = await response.json();
                    const sortedScores = data.data.sort((a, b) => a.time - b.time);
                    setLevelOneScores(sortedScores);
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                console.log(err);
            }
            try {
                const response = await fetch('http://localhost:5000/SecondLevelData');
                if (response.ok) {
                    const data = await response.json();
                    const sortedScores = data.data.sort((a, b) => a.time - b.time);
                    setLevelTwoScores(sortedScores);
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                console.log(err);
            }
            try {
                const response = await fetch('http://localhost:5000/ThirdLevelData');
                if (response.ok) {
                    const data = await response.json();
                    const sortedScores = data.data.sort((a, b) => a.time - b.time);
                    setLevelThreeScores(sortedScores);
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                console.log(err);
            }
            try {
                const response = await fetch('http://localhost:5000/FourthLevelData');
                if (response.ok) {
                    const data = await response.json();
                    const sortedScores = data.data.sort((a, b) => a.time - b.time);
                    setLevelFourScores(sortedScores);
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchScores();
    }, []);
    return (
        <>
            <button className="back-button" onClick={()=>navigate('/menu')}>Back</button>
            <header className='leaderboard-header'>
                <h1>Level Leaderboards</h1>
            </header>
            {/* .map function displaying all levels */}
            <div className="leaderboard-level-container">
                {[1, 2, 3, 4].map((level, index) => (
                    <div key={index} className={'level'} onClick={() => handleLevelClick(index)}>
                        <button className={`leaderboard-button ${selectedLevel === index ? "selected" : ""}`}>
                            {level}
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getSelectedScores().slice(0, 10).map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Leaderboards