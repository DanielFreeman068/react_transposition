import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
            <a className="back-button" href="/">Quit</a>
            <header>
                <h1>Cipher League</h1>
            </header>
            <div className="menu-container">
                {/* all menu options */}
                <a className="menu-options" onClick={()=> navigate('/levels')}>Levels</a>
                <a className="menu-options" onClick={()=> navigate('/tutorial')}>How To Play</a>
                <a className="menu-options" onClick={()=> navigate('/leaderboards')}>Leaderboards</a>
            </div>
        </>
    )
}

export default Menu