import React, { useEffect, useState } from 'react';

const Leaderboards = () => {
    const [levelOneScores, setLevelOneScores] = useState([]);

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
        };
        fetchScores();
    }, []);
    return (
        <>
            <a className="back-button" href="/menu">Back</a>
            <div>
                <h1>Leaderboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {levelOneScores.slice(0, 10).map((item, index) => (
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