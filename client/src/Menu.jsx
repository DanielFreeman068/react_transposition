import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="back-button" onClick={()=>navigate('/')}>Quit</button>
            <header>
                <h1>Cipher League</h1>
            </header>
            <div className="menu-container">
                {/* all menu options */}
                <button className="menu-options" onClick={()=> navigate('/levels')}>Levels</button>
                <button className="menu-options" onClick={()=> navigate('/tutorial')}>How To Play</button>
                <button className="menu-options" onClick={()=> navigate('/leaderboards')}>Leaderboards</button>
            </div>
        </>
    )
}

export default Menu