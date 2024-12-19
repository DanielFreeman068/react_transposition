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
                <a className="menu-options" href="/levels">Levels</a>
                <a className="menu-options" href="/tutorial">How To Play</a>
                <a className="menu-options" href="/leaderboards">Leaderboards</a>
            </div>
        </>
    )
}

export default Menu