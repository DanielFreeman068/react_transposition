const Menu = () => {
    return (
        <>
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