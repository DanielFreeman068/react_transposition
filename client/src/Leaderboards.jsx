import React, { useEffect, useState } from 'react';

const Leaderboards = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch('http://localhost:5000/leaderboards');
                if (response.ok) {
                    const data = await response.json();
                    setScores(data.data);
                    setLoading(false);
                } else {
                    throw new Error('Failed to fetch scores');
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <div>
                <h1>Leaderboard</h1>
                <ul>
                    {scores.map((item, index) => (
                    <li key={index}>
                        <span>{item.username}</span>: <span>{item.time}</span>: <span>{item.level}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Leaderboards