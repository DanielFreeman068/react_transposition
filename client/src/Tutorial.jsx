import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
    const navigate = useNavigate();
    return (
        <div className="tutorial-container">
            <button className="back-button" onClick={()=>navigate('/menu')}>Back</button>
            {/* Header Section */}
            <header>
                <h1>How To Play</h1>
            </header>

            <div className="tutorial-content">
                {/* Game Overview */}
                <section className="tutorial-section">
                    <h2>Game Overview</h2>
                    <p>
                        Welcome to the Cipher League! This game tests your ability to decode 
                        scrambled words using transposition ciphers. You'll need to rearrange 
                        letters according to given patterns to reveal the hidden words.
                    </p>
                </section>

                {/* Game Rules */}
                <section className="tutorial-section">
                    <h2>Game Rules</h2>
                    <div className="numbered-list">
                        <div className="list-item">
                            <span className="number">1</span>
                            <p>Each puzzle presents a scrambled word (cipher text) and a key sequence.</p>
                        </div>
                        <div className="list-item">
                            <span className="number">2</span>
                            <p>Use the numbered columns to rearrange the letters according to the key sequence.</p>
                        </div>
                        <div className="list-item">
                            <span className="number">3</span>
                            <p>Hints are available however they do add 30 seconds to your final time so use cautiously.</p>
                        </div>
                        <div className="list-item">
                            <span className="number">4</span>
                            <p>The * symbol represents a space.</p>
                        </div>
                    </div>
                </section>

                {/* How to Solve */}
                <section className="tutorial-section">
                    <h2>How to Solve Ciphers</h2>
                    <div className="example-box">
                        <h3>Example:</h3>
                        <div className="example-content">
                            <p>Cipher Text: <span className="code">eo*hl*l**</span></p>
                            <p>Key: <span className="code">2, 1, 3</span></p>
                            <p>Answer: <span className="code">hello</span></p>
                            <p>Solution: Write the text in columns following the key sequence, then read row by row. If any * are at the end just leave them as whitespace</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Tutorial;