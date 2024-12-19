import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const bannedUsernames = ["SEX", "ASS", "FAG"];

function App() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //every time the user types a letter it gets uppercased
    const handleUsernameChange = (e) => {
        const value = e.target.value.toUpperCase();
        setUsername(value);
        setError('');
    };

    //function to make sure username is three letters, only has letters, and is not already in use
    const validateUsername = () => {
        if (username.length !== 3) {
            setError('Username must be exactly 3 letters');
            return false;
        }

        if (!/^[A-Z]+$/.test(username)) {
            setError('Username must contain only letters');
            return false;
        }

        if (bannedUsernames.some(badWord => username.toUpperCase().includes(badWord))) {
            setError('Username contains inappropriate words');
            return false;
        }

        return true;
    };

    //when form is submitted it checks the username and if it checks out it sends user to menu
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validateUsername()) {
            let result = await fetch('http://localhost:5000',{
                method: 'post',
                body: JSON.stringify({username, id:Date.now()}),
                headers:{'Content-Type': 'application/json'}
            })
            result = await result.json()
            if(result.success){
                console.log(username);
                localStorage.setItem("username", username);
                navigate('/menu');
            } else {
                alert(result.msg);
            }
        }
    };
    
    return (
        <>
            <header>
                <h1>Cipher League</h1>
            </header>
            <div className="landing-container">
                <main>
                    {/* form with validation functions tied to it */}
                    <p className="landing-intro-text">Welcome to the Cipher League! Please enter your three character username to begin.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Enter Username:</label>
                            <input type="text" id="username" value={username} onChange={handleUsernameChange} maxLength="3" placeholder="Type here"/>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <button type="submit" className="start-button">Start Game</button>
                    </form>
                </main>
            </div>
        </>
    );
}

export default App;
