import "../css/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <a className="home" href="/">
                    <img src="/static/logos/favicon.webp"></img>
                    <p>WHS Comp Sci Club</p>
                </a>
                <a href="/leaderboard">Leaderboard</a>
                <a href="/events">Events</a>
                <a href="/board">Board</a>
            </div>

            <div className="right">
                <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</a>
                <a href="https://discord.gg/g6HMBn9GZD" target="_blank"><i className="fa-brands fa-discord"></i> Discord</a>
            </div>
        </div>
    )
}

export default Navbar;